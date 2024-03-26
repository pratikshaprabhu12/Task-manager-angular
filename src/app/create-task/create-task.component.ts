import { Component, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  title: string = '';
  description: string = '';
  dueDate: Date = new Date();

  @Output() taskCreated = new EventEmitter<{ title: string, description: string, dueDate: Date }>();

  constructor(private taskService: TaskService) { }

  createTask() {
    if (this.title && this.description && this.dueDate) {
      if (this.taskService.validateDateFormat(this.dueDate)) {
        const task = {
          title: this.title,
          description: this.description,
          dueDate: new Date(this.dueDate)
        };
        
        this.taskService.createTask(task);
        alert('Task created successfully!');
        this.clearForm();
      } else {
        alert('Invalid date format. Please use YYYY-MM-DD.');
      }
    } else {
      alert('Please fill out all fields.');
    }
  }

  clearForm() {
    this.title = '';
    this.description = '';
    this.dueDate;
  }
}
