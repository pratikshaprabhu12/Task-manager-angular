import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskService]
    });
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a task', () => {
    const task = { title: 'Test Task', description: 'Test Description', dueDate: new Date() };
    service.createTask(task);
    expect(service.tasks.length).toBe(1);
    expect(service.tasks[0].title).toBe('Test Task');
  });

  it('should return all tasks', () => {
    const tasks = service.getTasks();
    expect(tasks.length).toBe(0);
  });

  it('should return a specific task by ID', () => {
    const task = { id: 1, title: 'Test Task', description: 'Test Description', dueDate: new Date(), status: false };
    service.createTask(task);
    const retrievedTask = service.getTaskById(1);
    expect(retrievedTask).toEqual(task);
  });

  it('should update a task', () => {
    const task = { id: 1, title: 'Test Task', description: 'Test Description', dueDate: new Date(), status: false };
    service.createTask(task);
    const updatedTask = { id: 1, title: 'Updated Task', description: 'Updated Description', dueDate: new Date(), status: true };
    service.updateTask(updatedTask);
    const retrievedTask = service.getTaskById(1);
    expect(retrievedTask?.title).toBe('Updated Task');
    expect(retrievedTask?.description).toBe('Updated Description');
    expect(retrievedTask?.status).toBe(true);
  });

  it('should delete a task', () => {
    const task = { id: 1, title: 'Test Task', description: 'Test Description', dueDate: new Date(), status: false };
    service.createTask(task);
    service.deleteTask(1);
    expect(service.tasks.length).toBe(0);
  });

});
