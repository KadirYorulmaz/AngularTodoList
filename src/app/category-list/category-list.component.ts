import { Component, OnInit, Output } from '@angular/core';

import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories;
  editClicked = false;
  selectedCategory;

  constructor(
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getAllCategories();
  }

  OnEdit(c): void{
    console.log(c);
    this.editClicked = true;
    this.selectedCategory = c;
  }
  
  backBtn(): void {
    this.editClicked = false;
   }

}