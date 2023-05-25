from flask import Flask
from flask_cors import CORS, cross_origin
SQLALCHEMY_DATABASE_URI = "mssql+pyodbc://localhost:3306/ImpredecibleBD?driver=SQL Server Native Client 11.0&trusted_connection=yes"
SQLALCHEMY_TRACK_MODIFICATIONS = False


app = Flask(__name__)
CORS(app) 


#Members API route
@app.route("/members")
@cross_origin(origin='*')

def members():
    return{"members": ["Member1", "Member2", "Member3"]}

if __name__ == "__main__":
    app.run(debug=True)
    
# Ruta para el inicio de sesión
@app.route('/login', methods=['POST'])
@cross_origin(origin='*')
def login():
    # Obtener datos del formulario de inicio de sesión
    username = request.form['username']
    password = request.form['password']

    # Verificar las credenciales del usuario (esto es solo un ejemplo, debes implementar tu propia lógica de autenticación)
    if username == 'usuario' and password == 'contraseña':
        # Retornar una respuesta de éxito
        return jsonify({'message': 'Inicio de sesión exitoso'}), 200
    else:
        # Retornar una respuesta de error
        return jsonify({'message': 'Credenciales inválidas'}), 401

if name == 'main':
    app.run(debug=True)

# app.py (archivo principal de Flask)

app = Flask(__name__)

# Ruta para el registro de usuarios
@app.route('/api/register', methods=['POST'])
@cross_origin(origin='*')
def register():
    # Obtener los datos del formulario de registro desde el cuerpo de la solicitud
    username = request.json['username']
    password = request.json['password']
    email = request.json['email']

    # Validar y guardar los datos en la base de datos o en otro lugar
    # ... código de validación y almacenamiento ...

    # Enviar respuesta de éxito al frontend
    response = {
        'message': 'Registro exitoso',
        'data': {
            'username': username,
            'email': email
        }
    }
    return jsonify(response), 200

if __name__ == '__main__':
    app.run(debug=True)

#Ruta de la tabla user
from .models import User
@app.route('/users')
def get_users():
    users = User.query.all()
    return jsonify([{'id': u.id, 'name': u.name, 'email': u.email} for u in users])


