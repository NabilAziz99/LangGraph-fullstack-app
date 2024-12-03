from fastapi import APIRouter, WebSocket
from ..models.models import User, Credentials, Task
from ..services.task_service import (
    add_task,
    get_tasks,
    update_task,
    delete_task
)

router = APIRouter()

@router.post("/api/tasks")
async def add_task_endpoint(task: Task):
    return add_task(task)

@router.get("/api/tasks")  # Ensure this is GET
async def get_tasks_endpoint(user_id: str = "1"):
    return get_tasks(user_id)



@router.put("/api/tasks/{task_id}")
async def update_task_endpoint(task_id: str, task: Task):
    return update_task(task_id, task)

@router.delete("/api/tasks/{task_id}")
async def delete_task_endpoint(task_id: str):
    return delete_task(task_id)

@router.websocket("/ws")
async def task_updates(websocket: WebSocket):
    await websocket.accept()
    while True:
        await websocket.send_text("Task updated")
