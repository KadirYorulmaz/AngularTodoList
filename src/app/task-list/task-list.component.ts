import { Component, OnInit } from '@angular/core';

import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
taskList;
// countElements = [];
  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.taskList = this.taskService.getAllTasks();

    // this.taskList.forEach(element => {
    //   console.log(element);
    //   this.countElements.push(element.task_id);
    //   console.log(this.countElements.length);
    // });

  }

}
