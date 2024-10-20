from flask import render_template, request, jsonify
from Tock import app, create_token, verify_token
from werkzeug.security import generate_password_hash, check_password_hash
from Tock.models import Users, Docs, Tasks, Teams, TeamMembers
from Tock import db
from sqlalchemy import or_
from datetime import datetime
from sqlalchemy import or_

import jwt

@app.route('/api/signup', methods=['POST'])
def signUp():
    data = request.get_json()

    # Extract fields
    username = data.get('username')
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    gender = data.get('gender')

    print("Gender:", gender)

    # Check for existing user by email or username
    existing_user_email = Users.query.filter_by(email=email).first()
    existing_user_username = Users.query.filter_by(username=username).first()

    # Handle existing users
    if existing_user_email:
        return jsonify({'error': "Email already exists."}), 400
    if existing_user_username:
        return jsonify({'error': "Username already exists."}), 400

    try:
        # Hash the password and create a new user
        hashed_password = generate_password_hash(password)
        
        print("Hashed Password:", hashed_password)

        new_user = Users(username=username, name=name, email=email, password=hashed_password, gender=gender)
        db.session.add(new_user)
        db.session.commit()
        
        userID = new_user.id  # Directly get the id of new_user
        token = create_token(userID)

        return jsonify({'msg': 'User registered successfully', 'name': name, 'id': userID, 'token': token}), 201

    except Exception as e:
        db.session.rollback()
        print(f"Error during signup: {e}")
        return jsonify({'error': 'Registration failed.', 'details': str(e)}), 500



@app.route('/api/login', methods=['POST'])
def logIn():

    data = request.get_json()

    # Validate if the data is correct
    if not data or 'usernameOrEmail' not in data or 'password' not in data:
        return jsonify({"error": "Username/Email and Password are required."}), 400

    username_or_email = data['usernameOrEmail']
    password = data['password']

    print("Username or Email received:", username_or_email)
    print("Password received:", password)

    # Query to find the user by username or email
    user = Users.query.filter(or_(Users.username == username_or_email, Users.email == username_or_email)).first()

    print("userid is", user.id)

    if not user:
        print("User not found")
        return jsonify({"error": "Username/Email does not exist."}), 401

    print("Stored Hashed Password (from DB):", user.password)  # Debugging print

    # Check if the password matches the hashed password in the database
    if check_password_hash(user.password, password):
        print("Password matches, login successful")
        token = create_token(user.id)  # Assuming you have a create_token function

        return jsonify({"message": f"Welcome, {user.username}!", 'id': user.id, 'token': token}), 200
    else:
        print("Invalid password")
        
        return jsonify({"error": "Invalid username or password."}), 401

# Docs Routes --------------------------------------------------------------------

@app.route("/api/docs", methods=['POST']) # to fetch all the docs
@verify_token
def allDocs():
    data = request.get_json()
    userid = data.get('userId')  # Dynamically get the userId from the request

    # Query for all docs for the given user_id
    allUserDocs = Docs.query.filter_by(user_id=userid).all()

    # Serializing the docs into a list of dictionaries
    docs_list = []
    for doc in allUserDocs:
        docs_list.append({
            'id': doc.id,
            'title': doc.title,  # Assuming you have these fields in the Docs model
            'content': doc.content,
            'created_at': doc.created_at.strftime("%Y-%m-%d %H:%M:%S"),  # Format date as string
            'is_type_project': doc.is_type_project,
            'is_favorite': doc.is_favorite
        })

    print(docs_list)

    # Return the serialized docs as a JSON response
    return jsonify(docs_list)


@app.route('/api/doc/create-doc', methods=['POST'], endpoint='create_doc') # to create new doc 
@verify_token
def createDoc():

    data = request.get_json()

    try:
        new_doc = Docs(title=data['title'], content=data['content'], user_id=data['userId'])

        print(data)


        with app.app_context():
            db.session.add(new_doc)
            db.session.commit()


        return jsonify({'message': 'done'}), 200
    except:
        return jsonify({'message': 'no done'}), 401

    
@app.route('/api/doc/update', methods=['PUT'], endpoint='update') # to update the doc 
@verify_token
def updateDoc():

    data = request.get_json()

    print("sivaji maharaj", data)

    try:
        doc_to_update = Docs.query.get(data['oldId'])

        if not doc_to_update:
            return jsonify({'message': 'no done'}), 401
    

        doc_to_update.update_doc(title=data.get('newTitle'), content=data.get('newContent'), is_favorite=data.get('isFavorite'))


        # # Update the document's fields
        # doc_to_update.title = data.get('newTitle', doc_to_update.title)  # Update title if provided
        # doc_to_update.content = data.get('newContent', doc_to_update.content)  # Update content if provided

        print(doc_to_update)
        # # commit changes
        # db.session.commit()

        return jsonify({'message': 'done'}), 200


    except Exception as e:
        db.session.rollback()
        print(e)

        return jsonify({'message': 'Update failed'}), 500  # Return a server error


@app.route('/api/doc/update/star', methods=['PUT'], endpoint='star') # to start the doc
@verify_token
def makeFavorites():

    data = request.get_json()

    try:
        doc_to_update = Docs.query.get(data['docId'])

        if not doc_to_update:
            return jsonify({'message': 'no done'}), 401
        

        print(data['isFavorite'])

        doc_to_update.update_doc(is_favorite=data['isFavorite'])


        return jsonify({'message': 'done'}), 200



    except Exception as e:
        db.session.rollback()
        print(e)

        return jsonify({'message': 'Update failed'}), 500  # Return a server error


@app.route('/api/doc/delete/<int:docId>', methods=['DELETE'], endpoint='delete_document') # to delete the doc
@verify_token
def deleteDoc(docId):

    doc_to_delete = Docs.query.get(docId)

    if doc_to_delete:

        db.session.delete(doc_to_delete)
        db.session.commit()


        print("doc delete")

        return jsonify({'message': 'delete done'}), 200
    else:
        return jsonify({'message': 'delete fail'}), 404
    


# ToDo Routes --------------------------------------------------------------------------------------------

@app.route('/api/todo/create-todo', methods=['POST'], endpoint='create_todo')
@verify_token
def createToDo():

    data = request.get_json()

    # Assuming 'due_date' is coming as an ISO string, let's convert it
    due_date_str = data['due_date']  # '2024-10-07T18:30:00.000Z'

    # Convert the date string to a Python datetime object
    due_date_obj = datetime.strptime(due_date_str, '%d/%m/%Y, %I:%M:%S %p')  # Example for "10/12/2024, 2:45:00 PM"

    print(due_date_obj.day)
    print(due_date_obj.date)
    print(due_date_obj.month)
    print(due_date_obj.year)

    try:

        new_todo = Tasks(title=data.get('title'), is_type_project=data.get('is_type_project'), priority=data.get('priority'), due_date=due_date_obj, user_id=data.get('user_id'))

        with app.app_context():
            db.session.add(new_todo)
            db.session.commit()


        return jsonify({'msg': 'done'}), 200

    except Exception as e:

        print(e)
        return jsonify({'msg': 'false'}), 401


@app.route('/api/todo/getAll', methods=['POST'], endpoint='getAllToDo')
@verify_token
def getAllToDo():

    data = request.get_json()

    print(data.get('user_id'))

    try:
        allToDo = Tasks.query.filter_by(user_id=data.get('user_id')).all()


        todo_list = []

        for todo in allToDo:
            todo_list.append({
                'id': todo.id,
                'title': todo.title,
                'is_type_project': todo.is_type_project,
                'status': todo.status,
                'due_date': todo.due_date,
                'assignee_id': todo.assignee_id,
                'priority': todo.priority
            })

    
        return jsonify(todo_list)
    except Exception as e:
        print("err", e)

        return jsonify({"msg": "not done"})

    # Serializing the docs into a list of dictionaries
    

    return 0


@app.route('/api/todo/update', methods=['PUT'], endpoint='update_todo')
@verify_token
def updateToDo():


    data = request.get_json()


    try:
        task_to_update = Tasks.query.get(data.get("taskId"))

        if not task_to_update:
            return jsonify({'msg': 'false'}), 401
    
        task_to_update.update_task(status=data.get('status'))

        return jsonify({'msg': 'done'}), 200

    except Exception as e:
        print(e)
        return jsonify({'msg': 'false'}), 401

    
@app.route('/api/todo/delete/<int:taskId>', methods=['DELETE'], endpoint='delete_todo')
@verify_token
def deleteToDo(taskId):

    try:
        print("ME --", taskId)
        task_to_delete = Tasks.query.get(taskId)

        if not task_to_delete:
            return jsonify({'msg': "not"}), 401
        

        db.session.delete(task_to_delete)
        db.session.commit()


        return jsonify({"msg": 'done'}), 200

    except Exception as e:
        print(e)
        return jsonify({'msg': "not"}), 401
    

# ----------------------------------------------- Teams ----------------------------------------------

@app.route('/api/teams/create-team', methods=['POST'], endpoint='create_team')
@verify_token
def createTeam():

    data = request.get_json()

    try:

        new_team = Teams(name=data.get('newTeamName'), desc=data.get('newTeamDesc'), creator_id=data.get('userId'))

        with app.app_context():
            db.session.add(new_team)
            db.session.commit()
            db.session.refresh(new_team)

        
        return jsonify({'msg': 'team created', 'teamId': new_team.id}), 200


    except Exception as e:
        print(e)
        return jsonify({'msg': 'some error'}), 407





@app.route('/api/teams/getallteams', methods=['POST'], endpoint='get_all_teams')
@verify_token
def getAllTeams():

    data = request.get_json()


    try:
        allTeam = Teams.query.filter_by(creator_id=data.get('userId')).all()


        teams_list = []



        

        for team in allTeam:


            member_details = []

            for member in team.members:

                user = Users.query.get(member.user_id)

                if user:

                    member_details.append({
                        'id': user.id,
                        'username': user.username,
                        'name': user.name,
                        'email': user.email
                    })

            teams_list.append({
                'id': team.id,
                'name': team.name,
                'desc': team.desc,
                'created_at': team.created_at,
                'members': member_details
            })


        print(teams_list)

    
        return jsonify(teams_list)
    except Exception as e:
        print("err", e)

        return jsonify({"msg": "not done"})

    # Serializing the docs into a list of dictionaries
    

    return 0



@app.route('/api/teams/team/addmember', methods=['POST'], endpoint='add_member')
@verify_token
def addNewTeamMember():

    data = request.get_json()

    teamId = data.get('teamId')
    userUserName = data.get('userUserName')
    userEmail= data.get('userEmail')


    print(teamId, userUserName, userEmail)

    try:

        existing_team = Teams.query.get(teamId)

        print("team id is", existing_team.id)

        print("team get")

        if not existing_team:
            return jsonify({"msg": 'team not exist'}), 407
        
        existing_username = Users.query.filter_by(username=userUserName).first()
        existing_email = Users.query.filter_by(email=userEmail).first()

        print(existing_email)

        if existing_email.id == existing_username.id:

            print("find team memebr id ", existing_email.id)

            existing_team.add_member(existing_username.id)

            print("Team member added")

            return jsonify({"msg": "team member added"}), 200
        
    except Exception as e:

        print("while adding member")
        return jsonify({"msg": "not added new member"}), 400


