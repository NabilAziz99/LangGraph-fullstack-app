def register(user):
    # Logic to register a user
    return {"success": True, "user": user}

def authenticate(credentials):
    # Logic to authenticate a user
    return {"success": True, "token": "fake-token", "user": {"id": "1", "username": credentials.username}}