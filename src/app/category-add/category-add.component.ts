import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  checkoutForm;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
  ) { 
    this.checkoutForm = this.formBuilder.group({
      name: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(checkoutForm): void{
    console.log(checkoutForm);
    //validateCategory 
    this.categoryService.createCategory(checkoutForm);
  }

}
