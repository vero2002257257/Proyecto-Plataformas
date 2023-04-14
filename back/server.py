from flask import Flask

app = Flask(__name__)

#Members API route
@app.route("/members")

def members():
    return{"members": ["Member1", "Member2", "Member3"]}

if __name__ == "__main__":
    app.run(debug=True)
    
# Ruta para el inicio de sesión
@app.route('/login', methods=['POST'])
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
    



