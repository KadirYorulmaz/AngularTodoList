import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CategoryService } from '../services/category.service';

import { Router } from '@angular/router';

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
    private router: Router,
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
    this.router.navigate(['/category']);
  }

}
