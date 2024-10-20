from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

import jwt
from datetime import datetime, timedelta, timezone



# Flask instance creation 
app = Flask(__name__)



CORS(app)
# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tododb.db'

# Secret key for JWT tokens
app.config['SECRET_KEY'] = 'This_is_my_secret_hahaha'

# Database creation
db = SQLAlchemy(app)





# Generate a token when a user logs in or signs up
def create_token(user_id):
    token = jwt.encode({
        'user_id': user_id, 
        'exp': datetime.now(timezone.utc) + timedelta(hours=24)  # Token expires in 24 hours
    }, app.config['SECRET_KEY'], algorithm='HS256')  # Sign the token with the secret key
    return token



from flask import request, jsonify
import jwt
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)

def verify_token(f):
    def verify_wrapper(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token or not token.startswith("Bearer "):
            logging.warning('Token is missing')
            return jsonify({'error': 'Token is missing'}), 401  # Change to 401
        
        token = token.split(" ")[1]  # Extract the token part

        try:
            # Decode and verify the token
            decoded_token = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
            request.user_id = decoded_token['user_id']  # Attach user_id to request
        except jwt.ExpiredSignatureError:
            logging.warning('Token has expired')
            return jsonify({'error': 'Token has expired'}), 401  # Change to 401
        except jwt.InvalidTokenError as e:
            logging.error('Invalid token: %s', str(e))
            return jsonify({'error': 'Invalid token'}), 401  # Change to 401
        
        return f(*args, **kwargs)
    
    return verify_wrapper


from Tock import models


with app.app_context():
    db.create_all()


# for loading all routes
from Tock import routes




