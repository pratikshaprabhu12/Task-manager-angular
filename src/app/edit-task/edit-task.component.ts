import { Component ,Input,OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent {
  @Input() task: { id: number, title: string, description: string, dueDate: Date,status:boolean }|undefined={ id:0 , title: '', description: '', dueDate: new Date(), status:false };
  formattedDueDate: string|undefined;
  
  constructor( private route: ActivatedRoute,
    private router: Router,private taskService: TaskService) { }

  ngOnInit(): void {
    const taskId = Number(this.route.snapshot.paramMap.get('id'));
    this.task = this.taskService.getTaskById(taskId);
    this.formattedDueDate = this.task&&this.task.dueDate.toISOString().substring(0, 10);
  }

  updateTask() {
    // Update the task using TaskService
    if(this.formattedDueDate&&this.task){
    this.task.dueDate = new Date(this.formattedDueDate);
    }
    this.taskService.updateTask(this.task);
    console.log('Task updated:', this.task);
    this.router.navigate(['/tasks', this.task&&this.task.id],{ replaceUrl: true });
  }
}
