import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { Task } from '../task';
import { Input } from '@angular/core';

import { CategoryService } from '../services/category.service';
import { TaskService } from '../services/task.service'; 

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  checkoutForm;
  @Input() task;
  categories;
  selected;
  datetimeNow;
  
  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private taskService: TaskService,
  ) {
    this.checkoutForm = this.formBuilder.group({
      tasksId: '',
      title: '',
      description: '',
      categoryId: ''
    });
   }

  ngOnInit(): void {
    this.categories = this.categoryService.getAllCategories();
    this.selected = this.task.category_id; 
    console.log(this.task);
    console.log(this.task.category_id);
    console.log(this.task.category_name);
  }

  onSubmit(taskData){
    //Gem data
    // this.checkoutForm.reset();
  
    this.datetimeNow = Date.now();
    taskData.tasksId = this.task.task_id;
    taskData.createdDate = this.datetimeNow;
    taskData.categoryId = this.selected;
    console.log(taskData);
    console.warn('Your order has been submitted', taskData);
    this.taskService.editTask(taskData);
  	// "tasksId":"2",
	  // "title": "Go walk extra",
	  // "description": "Walk 10t step every day",
	  // "createdDate":"2020-04-04 06:05:09",
	  // "categoryId":"2"
      }

}
