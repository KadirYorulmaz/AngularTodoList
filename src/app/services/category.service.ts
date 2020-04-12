import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCategories() {
    return this.http.get('http://localhost:8080/categories/showCategories');
  }

  editCategory(category){
    console.log(category);
    return this.http.put('http://localhost:8080/categories/editCategory/' + category.category_id, category).subscribe(data => {
      console.log(data);
    });
  }

  createCategory(category){
    return this.http.post('http://localhost:8080/categories/addCategory', category).subscribe(data =>{
      console.log(data);
    });
  }

  validateCategory(category){
    console.log(category);
    console.log(this.getAllCategories());
  }

}
