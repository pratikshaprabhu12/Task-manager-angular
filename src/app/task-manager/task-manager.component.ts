import { Component } from '@angular/core';
import { TaskListComponent } from '../task-list/task-list.component';
import { CreateTaskComponent } from '../create-task/create-task.component';

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [TaskListComponent,CreateTaskComponent],
  templateUrl: './task-manager.component.html',
  styleUrl: './task-manager.component.css'
})
export class TaskManagerComponent {

}
