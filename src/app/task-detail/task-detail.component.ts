import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
task;
editComponentEdit = false;
editComponentDetail = true;


  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.task = this.taskService.getTaskById(params.get('taskId'));
    });
  }

  edit(): void {
    this.editComponentEdit = true;
    this.editComponentDetail = false;
  }

  delete(taskId): void {
    console.log(taskId);
    this.taskService.deleteTask(taskId);
    this.router.navigate(['/task']);
  }

  goBack(){
    this.editComponentEdit = false;
    this.editComponentDetail = true;
  }
}
