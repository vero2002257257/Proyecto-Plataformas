from ast import Match
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity

app = Flask(__name__)
CORS(app) #Permitir solicitudes CORS
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:sebas2013@localhost/flasksql' # URL de la base de datos
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'secret string'
db = SQLAlchemy(app) # instancia de la base de datos
jwt = JWTManager(app) # instancia de JWT

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
        # Crea un token de acceso para el usuario autenticado
        access_token = create_access_token(identity=user.id)
        return jsonify({'access_token': access_token}), 200
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

@app.route('/matches', methods=['GET'])
@jwt_required() # protege la ruta con JWT
def get_matches():
    # Recupere los matches del usuario actual
    user_id = get_jwt_identity() # Obtiene el ID del usuario actual a partir del token de acceso
    matches = Match.query.filter_by(user_id=user_id).all()
    # ...
    return jsonify(matches), 200

if __name__ == '__main__':
    app.run(debug=True)
