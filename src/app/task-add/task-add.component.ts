import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { CategoryService } from '../services/category.service';
import { TaskService } from '../services/task.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  checkoutForm;
  categories;
  task;
  datetimeNow;


  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router,
  ) { 
    this.checkoutForm = this.formBuilder.group({
      title: '',
      description: '',
      categoryId: ''
    });
  }

  ngOnInit(): void {
    this.categories = this.categoryService.getAllCategories();
    console.log(this.categories);
  }

  onSubmit(taskData){
    //Gem data
    this.checkoutForm.reset();
    console.warn('Your order has been submitted', taskData);
    this.datetimeNow = Date.now();
    taskData.createdDate = this.datetimeNow;
    console.log(taskData);
    this.taskService.createTask(taskData);
    this.router.navigate(['/task']);
    // "title": "Find appartment",
    // "description": "Find an appartment in central Copenhagen ",
    // "createdDate":"2020-01-01 04:05:06",
    // "categoryId":"2"

      }
}
