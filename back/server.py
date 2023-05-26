from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
CORS(app)  # Permitir solicitudes CORS
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:sebas2013@localhost/flasksql'  # URL de la base de datos
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'secret string'
db = SQLAlchemy(app)  # instancia de la base de datos


class User(db.Model):
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
    db.create_all()  # crea la tabla de usuarios si no existe


class Perfil(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(255), nullable=False)
    edad = db.Column(db.Integer, nullable=False)
    sexo = db.Column(db.String(10), nullable=False)
    descripcion = db.Column(db.Text)
    gustos = db.Column(db.Text)
    foto = db.Column(db.LargeBinary)

    # Columna de clave foránea hacia la tabla "User"
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    def __init__(self, nombre, edad, sexo, descripcion, gustos, foto, user_id):
        self.nombre = nombre
        self.edad = edad
        self.sexo = sexo
        self.descripcion = descripcion
        self.gustos = gustos
        self.foto = foto
        self.user_id = user_id

    def __repr__(self):
        return f'<Perfil {self.nombre}>'
with app.app_context():
    db.create_all()  # crea la tabla de perfil si no existe


@app.route('/login', methods=['POST'])
@cross_origin(origin='*')
def login():
    username = request.json.get('username')
    password = request.json.get('password')

    if not username or not password:
        return jsonify({'message': 'Credenciales incompletas'}), 400

    user = User.query.filter_by(username=username).first()

    if user and user.password == password:
        return jsonify({'message': 'Inicio de sesión exitoso'}), 200
    else:
        return jsonify({'message': 'Credenciales inválidas'}), 401


@app.route('/register', methods=['POST'])
@cross_origin(origin='*')
def register():
    username = request.json.get('username')
    password = request.json.get('password')
    email = request.json.get('email')

    if not username or not password or not email:
        return jsonify({'message': 'Datos incompletos'}), 400

    existing_user = User.query.filter_by(username=username).first()

    if existing_user:
        return jsonify({'message': 'El nombre de usuario ya está en uso'}), 400

    user = User(username=username, password=password, email=email)

    try:
        db.session.add(user)
        db.session.commit()
        response = {
            'message': 'Registro exitoso',
            'data': {
                'username': username,
                'email': email
            }
        }
        return jsonify(response), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': 'Error al registrar el usuario', 'error': str(e)}), 500


@app.route('/perfil', methods=['POST'])
def crear_perfil():
    data = request.json
    nombre = data.get('nombre')
    edad = data.get('edad')
    sexo = data.get('sexo')
    descripcion = data.get('descripcion')
    gustos = data.get('gustos')
    foto = data.get('foto')
    user_id = data.get('user_id')

    if not nombre or not edad or not sexo or not user_id:
        return jsonify({'message': 'Datos incompletos'}), 400

    perfil = Perfil(nombre=nombre, edad=edad, sexo=sexo, descripcion=descripcion, gustos=gustos, foto=foto,
                    user_id=user_id)

    try:
        db.session.add(perfil)
        db.session.commit()
        return 'Perfil creado exitosamente'
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': 'Error al crear el perfil', 'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
