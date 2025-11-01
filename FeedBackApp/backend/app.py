from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, Feedback
import csv
import os
from datetime import datetime

app = Flask(__name__)
# Update CORS to allow your React app
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

# CSV file path
CSV_FILE = 'feedback.csv'

def write_to_csv(name, email, message):
    """Write feedback data to CSV file"""
    file_exists = os.path.isfile(CSV_FILE)
    
    with open(CSV_FILE, 'a', newline='', encoding='utf-8') as csvfile:
        fieldnames = ['timestamp', 'name', 'email', 'message']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        
        # Write header if file is new
        if not file_exists:
            writer.writeheader()
        
        # Write the feedback data
        writer.writerow({
            'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
            'name': name,
            'email': email,
            'message': message
        })

@app.route('/submit', methods=['POST'])
def submit_feedback():
    data = request.json
    print("Received feedback:", data)
    
    try:
        # Write to CSV
        write_to_csv(data['name'], data['email'], data['message'])
        
        # Write to database
        new_feedback = Feedback(name=data['name'], email=data['email'], message=data['message'])
        db.session.add(new_feedback)
        db.session.commit()
        
        return jsonify({"message": "Feedback submitted!"}), 201
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": "Failed to submit feedback"}), 500

@app.route('/feedbacks', methods=['GET'])
def get_feedbacks():
    all_feedback = Feedback.query.all()
    return jsonify([f.to_dict() for f in all_feedback])

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)