import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // provide url for fetching data
  private apiUrl = 'http://localhost:5000/tasks';

  // add http to the constructor so the service can use it
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    // get an array of tasks from the apiUrl (observable should be an array of tasks)
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  addTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}`;

    return this.http.post<Task>(url, task, httpOptions);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;

    return this.http.put<Task>(url, task, httpOptions);
  }
}
