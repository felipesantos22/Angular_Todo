import { Component } from '@angular/core';
import { Task } from '../model/Task';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  task = new Task();

  tasks: Task[] = [];

  constructor(private service: TaskService) {}

  index(): void {
    this.service.index().subscribe((data) => (this.tasks = data));
  }

  create(): void {
    console.log("Criar");
    this.service.create(this.task).subscribe((data) => {
      this.tasks.push(data);
    });
  }

  ngOnInit() {
    this.index();
  }
}
