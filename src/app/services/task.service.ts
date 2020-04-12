import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }

  getAllTasks() {
    return this.http.get('http://localhost:8080/');
  }

  getTaskById(id) {
    console.log(id);
    console.log(this.http.get('http://localhost:8080/' + id));
    return this.http.get('http://localhost:8080/' + id);
  }

  createTask(task){
    console.log(task);
    return this.http.post('http://localhost:8080/createTask', task).subscribe(data => {
      console.log(data);
    });
  }

  editTask(task){
    console.log(task);
    return this.http.put('http://localhost:8080/editTask', task).subscribe(data => {
      console.log(data);
    });
  }

  deleteTask(taskId){
    console.log(taskId);
    return this.http.delete('http://localhost:8080/deleteTask/' + taskId).subscribe(data => {
      console.log(data);
    });
  }
}
