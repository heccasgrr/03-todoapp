// Angular
import { Component, ElementRef, OnInit, Input, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

// Store
import { Store } from '@ngrx/store';

import { Todo } from '../model/todo.model';
import { AppState } from '../../app.reducers';
import { ToggleTodoAction, EditTodoAction, DeleteTodoAction } from '../todo.actions';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @ViewChild('txtInputFisico')
  txtInputFisico: ElementRef;

  // Component Properties
  checkField: FormControl;
  editing: boolean;
  textInput: FormControl;

  // Inputs
  @Input()
  todo: Todo;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.checkField = new FormControl(this.todo.completed);
    this.textInput = new FormControl(this.todo.text, Validators.required);

    this.checkField.valueChanges.subscribe(value => {
      const action = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(action);
    });
  }

  edit() {
    this.editing = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  getTodoClasses(): any {
    return {
      completed: this.todo.completed,
      editing: this.editing
    };
  }

  onClickDelete() {
    const action = new DeleteTodoAction(this.todo.id);
    this.store.dispatch(action);
  }

  onTxtInputBlur() {
    this.editing = false;

    if (this.textInput.invalid
      || this.textInput.value === undefined
      || this.textInput.value === null
      || this.textInput.value === this.todo.text) {
      return;
    }

    const action = new EditTodoAction(this.todo.id, this.textInput.value);
    this.store.dispatch(action);
  }
}
