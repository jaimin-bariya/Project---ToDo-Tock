docs = [
    {
        "id": 1,
        "title": "React Basics",
        "content": "Learn the basics of React.",
        "type": "personal",
        "isFavorite": True,
        "createdAt": "2023-09-25",
        "projectId": None,
        "updatedAt": "2023-09-30"
    },
    {
        "id": 2,
        "title": "Django API Guide",
        "content": "Step-by-step guide to build Django API.",
        "type": "project",
        "isFavorite": False,
        "createdAt": "2023-09-26",
        "projectId": 1,
        "updatedAt": "2023-09-30"
    },
    {
        "id": 3,
        "title": "AI Development",
        "content": "Getting started with AI tools.",
        "type": "personal",
        "isFavorite": True,
        "createdAt": "2023-09-27",
        "projectId": None,
        "updatedAt": "2023-09-30"
    },
    {
        "id": 4,
        "title": "AI Dev4elopment",
        "content": "Getting started with AI tools.",
        "type": "personal",
        "isFavorite": False,
        "createdAt": "2023-09-27",
        "projectId": None,
        "updatedAt": "2023-09-30"
    },
    {
        "id": 5,
        "title": "5AI Development",
        "content": "Getting started with AI tools.",
        "type": "personal",
        "isFavorite": False,
        "createdAt": "2023-09-27",
        "projectId": None,
        "updatedAt": "2023-09-30"
    },
    {
        "id": 6,
        "title": "6AI Development678765678765678",
        "content": "Getting started with AI tools.",
        "type": "personal",
        "isFavorite": True,
        "createdAt": "2023-09-27",
        "projectId": None,
        "updatedAt": "2023-09-30"
    }
]


from Tock.models import Docs, Tasks
from Tock import app, db


with app.app_context():
    db.drop_all()

print("db cleaned")