# Full Stack To-Do List Application

This is a Full Stack To-Do List Application built with **React (Frontend)** and **FastAPI (Backend)**. Below are the steps to set up and run the application.

---

## Prerequisites

Before starting, make sure you have the following installed:

1. **Node.js and npm**  
   Install from [Node.js Official Website](https://nodejs.org/).  
   Verify installation:  
   ```bash
   node -v
   npm -v
   ```

2. **Python** (version 3.10 or later)  
   Install from [Python Official Website](https://www.python.org/).  
   Verify installation:  
   ```bash
   python3 --version
   pip --version
   ```

---

## Backend Setup (FastAPI)

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate  # On macOS/Linux
   .venv\Scripts\activate     # On Windows
   ```

3. Install required packages:
   ```bash
   pip install fastapi uvicorn
   ```

4. Start the backend server:
   ```bash
   uvicorn backend.app.main:app --reload
   ```

   The backend will run at `http://127.0.0.1:8000`. You can access the API documentation at `http://127.0.0.1:8000/docs`.

---

## Frontend Setup (React)

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend/my-app
   ```

2. Install required packages:
   ```bash
   npm install axios
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

   The frontend will run at `http://localhost:3000`.

---

## Running the Application

1. Start the **backend**:
   ```bash
   uvicorn backend.app.main:app --reload
   ```

2. Start the **frontend**:
   ```bash
   cd frontend/my-app
   npm start
   ```

3. Open the frontend in your browser at `http://localhost:3000` and use the application.

---

## Troubleshooting

### Backend CORS Issues
If the frontend cannot communicate with the backend, ensure the following middleware is added in the `backend/app/main.py`:
```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Allow frontend origin
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)
```

### Common Errors

- **422 Unprocessable Entity**: Ensure that the data sent from the frontend matches the backend models.
- **Network Error**: Verify the `API_URL` in `frontend/src/api/api.js` is correct:
  ```javascript
  const API_URL = 'http://127.0.0.1:8000/api';
  ```

---

## Project Directory Structure

```
project-folder/
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── endpoints/
│   │   ├── models.py
│   │   ├── services/
│   │   └── __init__.py
│   └── requirements.txt
├── frontend/
│   ├── my-app/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── api/
│   │   │   ├── App.js
│   │   │   ├── index.js
│   │   └── package.json
└── README.md
```

---

## Example Commands to Run

1. Backend:
   ```bash
   uvicorn backend.app.main:app --reload
   ```

2. Frontend:
   ```bash
   cd frontend/my-app
   npm install axios
   npm start
   ```

---

Copy and paste this into your GitHub README file to make it ready for others to use! Let me know if you need further assistance.
