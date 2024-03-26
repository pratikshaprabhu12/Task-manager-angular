import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute ,Router} from '@angular/router';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent {
  task: { id: number, title: string, description: string, dueDate: Date,status:boolean }|undefined;
  constructor(private route: ActivatedRoute, private router: Router, private taskService: TaskService) {
     
   }

  ngOnInit(): void {
    const taskId = Number(this.route.snapshot.paramMap.get('id'));
    console.log("h",this.taskService.getTaskById(taskId));
    this.task=this.taskService.getTaskById(taskId);
  }
  editTask() {
    this.router.navigate(['/edit-task', this.task&&this.task.id]);
  }
}
