import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: { id: number, title: string, description: string, dueDate: Date,status:boolean }[] = [];
  lastId: number = 0;

  constructor() { }

  createTask(task: { title: string, description: string, dueDate: Date }) {
    const newTask = {
      id: ++this.lastId,
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
      status:false
    };
    this.tasks.push(newTask);
  }

  getTasks(): { id: number, title: string, description: string, dueDate: Date,status:boolean }[] {
    return this.tasks;
  }

  getTaskById(id: number): { id: number, title: string, description: string, dueDate: Date ,status:boolean} |undefined{
    return this.tasks&&this.tasks.find(task => task.id === id);
  }

  updateTask(task: { id: number, title: string, description: string, dueDate: Date ,status:boolean}|undefined) {
    const index = this.tasks&&this.tasks.findIndex(t => t.id === (task?task.id:0));
    if (index !== -1 && task) {
      this.tasks[index] = task;
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  validateDateFormat(dateString: Date): boolean {
    const date=dateString.toString();
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(date);
  }
}
