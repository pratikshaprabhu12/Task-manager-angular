import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';

export const routes: Routes = [
{ path: '', redirectTo: '/task-manager', pathMatch: 'full'}, // Default route
{path :'task-manager' ,component:TaskManagerComponent },
{ path: 'tasks', component: TaskListComponent },
{ path: 'tasks/:id', component: TaskDetailsComponent },
{ path: 'create', component: CreateTaskComponent },
{ path: 'edit-task/:id', component: EditTaskComponent }
];