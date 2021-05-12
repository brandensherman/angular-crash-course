import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  faTimes = faTimes;

  // emit onDeleteTask (an event emitter that takes in a task)
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  deleteTaskItem(task) {
    this.onDeleteTask.emit(task);
  }

  toggleReminderItem(task) {
    this.onToggleReminder.emit(task);
  }
}
