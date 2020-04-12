import { Component, OnInit, Input } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  @Input() category;
  checkoutForm;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
  ) {
    this.checkoutForm = this.formBuilder.group({
      category_id: '',
      name: ''
    });
  }

  ngOnInit(): void {

  }

  onSubmit(taskData): void {
    taskData.category_id = this.category.category_id;
    console.log(taskData);
    // validateCategory
    this.categoryService.editCategory(taskData);
  }

}
