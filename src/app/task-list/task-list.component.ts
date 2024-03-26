import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: { id: number, title: string, description: string, dueDate: Date,status:boolean }[] = [];

  constructor(private router: Router,private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  markAsCompleted(taskId: number) {
    const taskIndex = this.tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      this.tasks[taskIndex].status = true;
    }
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId);
    this.tasks = this.taskService.getTasks(); // Update the task list
    console.log('Task deleted:', taskId);
  }

  onTaskClicked(taskId: number) {
    this.router.navigate(['/tasks', taskId]); // Navigate to task detail component with task ID
  }

}
