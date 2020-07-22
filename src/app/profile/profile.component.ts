import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import Todo from '../Todo';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  formData: any = {};
  public todos:Todo[]; 
  errors: any = [];
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.getTodo().subscribe((data: Todo[]) => {
      this.todos = data;
      console.log(this.todos)
  });
}

public addToList() { 
 
      this.errors = [];
        if (this.formData == '') { 
        } 
        else {  

            this.auth.saveTodo(this.formData)
            .subscribe((data) => {
              console.log("saved to the database")
              window.location.reload();
             },
              (errorResponse) => {
                this.errors.push(errorResponse.error.error);
              });
            }
    } 
    deleteTask(id){
      this.auth.deleteTask(id).subscribe(res=>{
        this.todos.splice(id,1);
        window.location.reload();
      });
    }
}
