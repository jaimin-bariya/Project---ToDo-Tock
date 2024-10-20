from Tock import db
from datetime import datetime, timezone
# from Tock import app
from werkzeug.security import generate_password_hash

class Users(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(length=100), unique=True, nullable=False)
    name = db.Column(db.String(length=100), nullable=False)
    email = db.Column(db.String(length=100), unique=True, nullable=False)
    password = db.Column(db.String(length=100), nullable=False)
    gender = db.Column(db.String(length=40), nullable=True)


    # One-to-many relationship: One user has many tasks
    tasks = db.relationship('Tasks', backref='user', lazy=True, cascade="all, delete")

    # One-to-many relationship: One user can create many projects
    projects = db.relationship('Projects', backref='owner', lazy=True, cascade="all, delete")

    # Optional: Relationship for easier access to user-created docs
    docs = db.relationship('Docs', backref='user', lazy=True, cascade="all, delete")

    # One-to-many relationship: One user can create many teams
    teams_created = db.relationship('Teams', backref='creator', lazy=True, cascade="all, delete")
    
    # One-to-many relationship: One user can be a member of many teams
    teams = db.relationship('TeamMembers', backref='user', lazy=True, cascade="all, delete")




    def __init__(self, username, name, email, password, gender) -> None:
        self.username = username
        self.email = email
        self.name = name
        self.password = password
        self.gender = gender


class Teams(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(length=200), nullable=False)
    desc = db.Column(db.Text(length=1000), nullable=True)
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))

    # Foreign key referencing the user who created the team
    creator_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    # One-to-many relationship: One team can have many members
    members = db.relationship('TeamMembers', backref='team', lazy=True, cascade="all, delete")



    def __init__(self, name, creator_id, desc = None) -> None:
        self.name = name
        self.creator_id = creator_id
        self.desc = desc


    def add_member(self, user_id):
        """Method to add a user to the team."""
        # Check if the user is already a member
        if any(member.user_id == user_id for member in self.members):
            print(f"member - {user_id} is already added in this team - {self.id}")
            return
        
        # Create a new TeamMembers entry
        new_member = TeamMembers(user_id=user_id, team_id=self.id)
        
        # Add the new member to the session and commit
        db.session.add(new_member)
        db.session.commit()
        print(f"User with ID {user_id} added to team '{self.name}'.")

    def remove_member(self, user_id):
        """Method to remove a user from the team."""

        member_to_remove = TeamMembers.query.filter_by(user_id=user_id, team_id=self.id).first()

        if member_to_remove:
            db.session.delete(member_to_remove)
            db.session.commit()
            print(f"User with ID {user_id} removed from team '{self.name}'.")
        else:
            print(f"User with ID {user_id} is not a member of the team.")


class TeamMembers(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    
    # Foreign key referencing the user who is a member of the team
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    
    # Foreign key referencing the team the user belongs to
    team_id = db.Column(db.Integer, db.ForeignKey('teams.id'), nullable=False)

    def __init__(self, user_id, team_id) -> None:
        self.user_id = user_id
        self.team_id = team_id


class Projects(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(length=200), nullable=False)
    desc = db.Column(db.Text(length=1000), nullable=True)
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))

    # Foreign key referencing the user who created the project
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    # One-to-many relationship: One project can have many tasks
    tasks = db.relationship('Tasks', backref='project', lazy=True, cascade="all, delete")
    
    # One-to-many relationship: One project can have many documents
    docs = db.relationship('Docs', backref='project', lazy=True, cascade="all, delete")



    def __init__(self, title, desc, owner_id) -> None:
        self.title = title
        self.desc = desc
        self.owner_id = owner_id


    def update_project(self, title=None, desc=None):
        """method to update the project details"""

        if title is not None:
            self.title = title

        if desc is not None:
            self.desc = desc

        self.updated_at = datetime.now(timezone.utc)  # Update the timestamp
        db.session.commit()  # Commit the changes to the database
        print(f"Project '{self.name}' updated successfully.")
    

class Docs(db.Model):

    # __name__ = "documents"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(length=200), nullable=False)
    content = db.Column(db.Text(length=1000), nullable=False)
    is_type_project = db.Column(db.Boolean, nullable=False, default=False)
    is_favorite = db.Column(db.Boolean, nullable=False, default=False)
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))

    # Foreign key referencing the 'id' field of the 'parent' table
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    # # Optional: Relationship for easier access between tables
    # users = db.relationship('Users', backref='docs')

    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'), nullable=True)


    def __init__(self, title, content, user_id, is_type_project=False, is_favorite=False, project_id = None) -> None:
        self.title = title
        self.content = content
        self.is_type_project = is_type_project
        self.user_id = user_id
        self.is_favorite = is_favorite

        self.project_id = project_id


    def __repr__(self):
        return f" {self.id} - {self.title} - {self.content}"



    def update_doc(self, title=None, content=None, is_favorite=None, is_type_project=None):
        """Method to update document attributes."""


        print("todays", is_favorite)

        if title is not None:
            self.title = title
        
        if content is not None:
            self.content = content

        if is_favorite is not None:
            self.is_favorite = is_favorite
        
        if is_type_project is not None:
            self.is_type_project = is_type_project

        db.session.commit()  # Commit the changes to the database
        print(f"Document '{self.title}' updated successfully.")



class Tasks (db.Model):

    id = db.Column(db.Integer, primary_key=True)

    title = db.Column(db.String(length=100), nullable=False)
    desc = db.Column(db.Text(length=1000), nullable=True)
    is_type_project = db.Column(db.Boolean, nullable=False, default=False)
    status = db.Column(db.Boolean, nullable=False, default=0)
    due_date = db.Column(db.DateTime)

    assignee_id = db.Column(db.Integer, nullable=True)
    priority = db.Column(db.Integer, default=0)
    
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))
    


    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'), nullable=True)

    def __init__(self, title, is_type_project,  priority, due_date, user_id,  status=0,  desc=None, assignee_id=None) -> None:

        self.title = title
        self.desc = desc
        self.is_type_project =is_type_project
        self.assignee_id = assignee_id
        self.priority = priority
        self.due_date = due_date
        self.user_id = user_id
        self.status = status


    def update_task(self, title=None, desc=None, is_type_project=None, assignee_id=None, priority=None, due_date=None, status=None):
        """Method to update the task attributes."""
        if title is not None:
            self.title = title
        if desc is not None:
            self.desc = desc
        if is_type_project is not None:
            self.is_type_project = is_type_project
        if assignee_id is not None:
            self.assignee_id = assignee_id
        if priority is not None:
            self.priority = priority
        if due_date is not None:
            self.due_date = due_date
        if status is not None:
            self.status = status
        
        self.updated_at = datetime.now(timezone.utc)  # Update the timestamp
        db.session.commit()  # Commit the changes to the database
        print(f"Task '{self.title}' updated successfully.")


        




