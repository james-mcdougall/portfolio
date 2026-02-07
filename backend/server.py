from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="James McDougall Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "message": "Portfolio API is running"}

@app.get("/api/profile")
async def get_profile():
    return {
        "name": "James McDougall",
        "title": "iOS Developer",
        "location": "St. Louis, MO",
        "veteran": True,
        "experience_start": 2019,
        "email": "jameswilliammcdougall@gmail.com",
        "phone": "(314)709-0309",
        "github": "https://github.com/james-mcdougall",
        "linkedin": "https://www.linkedin.com/in/jameswilliammcdougall/"
    }

@app.get("/api/projects")
async def get_projects():
    return [
        {
            "id": 1,
            "title": "Project One",
            "category": "iOS App",
            "description": "A placeholder for your first iOS project. Click to see more details.",
            "image": "https://images.unsplash.com/photo-1651130533706-ec3fc4701211?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2JpbGUlMjBiYW5raW5nJTIwYXBwJTIwdWklMjBkYXJrJTIwbW9kZXxlbnwwfHx8fDE3NzA0NDE0Njd8MA&ixlib=rb-4.1.0&q=85",
            "technologies": ["Swift", "SwiftUI", "Core Data"]
        },
        {
            "id": 2,
            "title": "Project Two",
            "category": "iOS App",
            "description": "A placeholder for your second iOS project. Click to see more details.",
            "image": "https://images.unsplash.com/photo-1571952288324-552b8c0daceb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhY2tlciUyMGFwcCUyMHVpJTIwZGFyayUyMG1vZGUlMjBtb2JpbGV8ZW58MHx8fHwxNzcwNDQxNDcxfDA&ixlib=rb-4.1.0&q=85",
            "technologies": ["UIKit", "HealthKit", "MapKit"]
        },
        {
            "id": 3,
            "title": "Project Three",
            "category": "iOS App",
            "description": "A placeholder for your third iOS project. Click to see more details.",
            "image": "https://images.unsplash.com/photo-1612588311647-c87d00ea19df?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwyfHxmaXRuZXNzJTIwdHJhY2tlciUyMGFwcCUyMHVpJTIwZGFyayUyMG1vZGUlMjBtb2JpbGV8ZW58MHx8fHwxNzcwNDQxNDcxfDA&ixlib=rb-4.1.0&q=85",
            "technologies": ["Swift", "ARKit", "Core Animation"]
        },
        {
            "id": 4,
            "title": "Project Four",
            "category": "iOS App",
            "description": "A placeholder for your fourth iOS project. Click to see more details.",
            "image": "https://images.unsplash.com/photo-1565268878251-eb6848dc481c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ24lMjB1aSUyMGRhcmslMjBtb2RlJTIwc2xlZWt8ZW58MHx8fHwxNzcwNDQxNDUwfDA&ixlib=rb-4.1.0&q=85",
            "technologies": ["SwiftUI", "CloudKit", "Bluetooth"]
        },
        {
            "id": 5,
            "title": "Project Five",
            "category": "iOS App",
            "description": "A placeholder for your fifth iOS project. Click to see more details.",
            "image": "https://images.unsplash.com/photo-1642055509518-adafcad1d22e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBtb2JpbGUlMjBiYW5raW5nJTIwYXBwJTIwdWklMjBkYXJrJTIwbW9kZXxlbnwwfHx8fDE3NzA0NDE0Njd8MA&ixlib=rb-4.1.0&q=85",
            "technologies": ["Objective-C", "UIKit", "Core Location"]
        }
    ]

@app.get("/api/projects/{project_id}")
async def get_project_detail(project_id: int):
    projects = {
        1: {
            "id": 1,
            "title": "Project One",
            "category": "iOS App",
            "description": "This is a detailed placeholder for your first iOS project. Add comprehensive information about the app's features, challenges solved, and technologies used.",
            "image": "https://images.unsplash.com/photo-1651130533706-ec3fc4701211?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2JpbGUlMjBiYW5raW5nJTIwYXBwJTIwdWklMjBkYXJrJTIwbW9kZXxlbnwwfHx8fDE3NzA0NDE0Njd8MA&ixlib=rb-4.1.0&q=85",
            "technologies": ["Swift", "SwiftUI", "Core Data"],
            "features": ["Feature 1 placeholder", "Feature 2 placeholder", "Feature 3 placeholder"],
            "challenges": "Describe the challenges you faced and how you solved them.",
            "outcome": "Describe the outcome and impact of this project."
        },
        2: {
            "id": 2,
            "title": "Project Two",
            "category": "iOS App",
            "description": "This is a detailed placeholder for your second iOS project.",
            "image": "https://images.unsplash.com/photo-1571952288324-552b8c0daceb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhY2tlciUyMGFwcCUyMHVpJTIwZGFyayUyMG1vZGUlMjBtb2JpbGV8ZW58MHx8fHwxNzcwNDQxNDcxfDA&ixlib=rb-4.1.0&q=85",
            "technologies": ["UIKit", "HealthKit", "MapKit"],
            "features": ["Feature 1 placeholder", "Feature 2 placeholder", "Feature 3 placeholder"],
            "challenges": "Describe the challenges you faced and how you solved them.",
            "outcome": "Describe the outcome and impact of this project."
        },
        3: {
            "id": 3,
            "title": "Project Three",
            "category": "iOS App",
            "description": "This is a detailed placeholder for your third iOS project.",
            "image": "https://images.unsplash.com/photo-1612588311647-c87d00ea19df?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwyfHxmaXRuZXNzJTIwdHJhY2tlciUyMGFwcCUyMHVpJTIwZGFyayUyMG1vZGUlMjBtb2JpbGV8ZW58MHx8fHwxNzcwNDQxNDcxfDA&ixlib=rb-4.1.0&q=85",
            "technologies": ["Swift", "ARKit", "Core Animation"],
            "features": ["Feature 1 placeholder", "Feature 2 placeholder", "Feature 3 placeholder"],
            "challenges": "Describe the challenges you faced and how you solved them.",
            "outcome": "Describe the outcome and impact of this project."
        },
        4: {
            "id": 4,
            "title": "Project Four",
            "category": "iOS App",
            "description": "This is a detailed placeholder for your fourth iOS project.",
            "image": "https://images.unsplash.com/photo-1565268878251-eb6848dc481c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ24lMjB1aSUyMGRhcmslMjBtb2RlJTIwc2xlZWt8ZW58MHx8fHwxNzcwNDQxNDUwfDA&ixlib=rb-4.1.0&q=85",
            "technologies": ["SwiftUI", "CloudKit", "Bluetooth"],
            "features": ["Feature 1 placeholder", "Feature 2 placeholder", "Feature 3 placeholder"],
            "challenges": "Describe the challenges you faced and how you solved them.",
            "outcome": "Describe the outcome and impact of this project."
        },
        5: {
            "id": 5,
            "title": "Project Five",
            "category": "iOS App",
            "description": "This is a detailed placeholder for your fifth iOS project.",
            "image": "https://images.unsplash.com/photo-1642055509518-adafcad1d22e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBtb2JpbGUlMjBiYW5raW5nJTIwYXBwJTIwdWklMjBkYXJrJTIwbW9kZXxlbnwwfHx8fDE3NzA0NDE0Njd8MA&ixlib=rb-4.1.0&q=85",
            "technologies": ["Objective-C", "UIKit", "Core Location"],
            "features": ["Feature 1 placeholder", "Feature 2 placeholder", "Feature 3 placeholder"],
            "challenges": "Describe the challenges you faced and how you solved them.",
            "outcome": "Describe the outcome and impact of this project."
        }
    }
    if project_id in projects:
        return projects[project_id]
    return {"error": "Project not found"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
