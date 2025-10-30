from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Feedback(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    email = db.Column(db.String(120))
    message = db.Column(db.Text)

    def to_dict(self):
        return {"id": self.id, "name": self.name, "email": self.email, "message": self.message}
