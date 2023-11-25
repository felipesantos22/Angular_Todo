import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private url: string = 'http://localhost:8000/api/task';

  constructor(private http: HttpClient) {}

  index(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  create(task: Task): Observable<Task> {
    return this.http.post<Task>(this.url, task);
  }
}
