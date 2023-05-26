from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
<<<<<<< HEAD
SQLALCHEMY_DATABASE_URI = "mssql+pyodbc://localhost:3306/ImpredecibleBD?driver=SQL Server Native Client 11.0&trusted_connection=yes"
SQLALCHEMY_TRACK_MODIFICATIONS = False
=======
from flask_sqlalchemy import SQLAlchemy
>>>>>>> 2b2539cb8950f987483a846df7a3168c0bb2e9ff


app = Flask(__name__)
CORS(app) #Permitir solicitudes CORS
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:sebas2013@localhost/flasksql' # URL de la base de datos
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'secret string'
db = SQLAlchemy(app) # instancia de la base de datos

class User(db.Model): # modelo de la tabla de usuarios
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True)
    password = db.Column(db.String(50))
    email = db.Column(db.String(50), unique=True)

    def __init__(self, username, password, email):
        self.username = username
        self.password = password
        self.email = email

    def __repr__(self):
        return f'<User {self.username}>'

with app.app_context():
    db.create_all() # crea la tabla de usuarios si no existe

@app.route('/login', methods=['POST'])
@cross_origin(origin='*')
def login():
    username = request.json['username']
    password = request.json['password']
    user = User.query.filter_by(username=username).first()
    if user and user.password == password:
        return jsonify({'message': 'Inicio de sesión exitoso'}), 200
    else:
        return jsonify({'message': 'Credenciales inválidas'}), 401

@app.route('/register', methods=['POST'])
@cross_origin(origin='*')
def register():
    username = request.json['username']
    password = request.json['password']
    email = request.json['email']
    user = User(username, password, email)
    db.session.add(user) # agrega el usuario a la base de datos
    db.session.commit() # guarda los cambios en la base de datos
    response = {
        'message': 'Registro exitoso',
        'data': {
            'username': username,
            'email': email
        }
    }
    return jsonify(response), 200

@app.route('/perfil', methods=['POST'])
@cross_origin(origin='*')
def home():
    return render_template("index.html")

if __name__ == '__main__':
    app.run(debug=True)
<<<<<<< HEAD

#Ruta de la tabla user
from .models import User
@app.route('/users')
def get_users():
    users = User.query.all()
    return jsonify([{'id': u.id, 'name': u.name, 'email': u.email} for u in users])


=======
>>>>>>> 2b2539cb8950f987483a846df7a3168c0bb2e9ff
