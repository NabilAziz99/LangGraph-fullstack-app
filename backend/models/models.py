from pydantic import BaseModel

class User(BaseModel):
    id: str
    username: str
    password: str

class Credentials(BaseModel):
    username: str
    password: str

from pydantic import BaseModel, Field
from uuid import uuid4

class Task(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid4()))  # Auto-generate ID
    title: str
    description: str = ""  # Default empty description
    userId: str = "1"  # Default userId for now
