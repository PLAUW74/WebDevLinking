from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, Feedback

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

@app.route('/submit', methods=['POST'])
def submit_feedback():
    data = request.json
    print("Received feedback:", data)
    new_feedback = Feedback(name=data['name'], email=data['email'], message=data['message'])
    db.session.add(new_feedback)
    db.session.commit()
    return jsonify({"message": "Feedback submitted!"}), 201

@app.route('/feedbacks', methods=['GET'])
def get_feedbacks():
    all_feedback = Feedback.query.all()
    return jsonify([f.to_dict() for f in all_feedback])

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)