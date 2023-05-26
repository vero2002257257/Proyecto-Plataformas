from flask_sqlalchemy import SQLAlchemy
from flask import Flask, render_template
from models import db, User

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mssql+pyodbc://<username>:<password>@<dsn_name>'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    email = db.Column(db.String(120), unique=True)

    def __repr__(self):
        return '<User {}>'.format(self.name)
    
def index():
    users = User.query.all()
    user_names = [user.name for user in users]
    return render_template('index.html', user_names=user_names)
    

