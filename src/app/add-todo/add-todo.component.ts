import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../models/tutorial.model';
import { TodoServiceService } from '../service/todo-service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})

export class AddTodoComponent implements OnInit {
  today: Date = new Date();
  tutorial: Tutorial = {
    title: '',
    description: '',
    today:this.today,
    Status: false
  };


  submitted = false;
formdeta: any;
todoform:any;
 
  

  constructor( private formBuilder: FormBuilder, private todoservice: TodoServiceService) { }

  ngOnInit(): void {
     this.todoform = this.formBuilder.group({
      title:['',Validators.required],
      description:['',Validators.required],
      today:[this.today]



     });
  }
 
  get f() {
    return this.todoform.controls;
  }

  


  onSubmit(): void {
    // const data = {
    //   title: this.tutorial.title,
    //   description: this.tutorial.description,
    //   today:this.tutorial.today
      
    // };
    
  
    this.todoservice.create(this.todoform.value)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
    // console.log(data)
}


newTutorial(): void {
  this.submitted = false;
  this.tutorial = {
    title: '',
    description: '',
    Status: false
  };
}

}
