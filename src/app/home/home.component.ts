import { Component, OnInit } from '@angular/core';
import {DatafromServerService} from "../datafrom-server.service";
import {isNullOrUndefined} from "util";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataFromServer: DatafromServerService,private router: Router ) { }

  Courses=[];
  ngOnInit() {
    if(isNullOrUndefined(this.dataFromServer.studentEmail)||this.dataFromServer.studentEmail==='null'){
      this.router.navigate(['login']);
    }else {
      this.dataFromServer.getCourses().subscribe(result => {

        this.Courses = result;
      })
    }
  }


  registerCourse(id) {

    this.dataFromServer.registerStudentIntoCourse(id).subscribe(result=>{
      console.log(result);
     if(result==='OK'){
       alert('Register successfully')
     }else{
       alert(result);
     }
    })

  }
}
