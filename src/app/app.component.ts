import { Component } from '@angular/core';
import { DemoService } from './demo.service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name : any;
  email: any;
  password: any;
  constructor(private demoService: DemoService){
       
  }

  onSubmit(value:any){
       //console.log("hello");
       this.name = value.name;
       this.email = value.email;
       this.password = value.password;
       console.log(this.name,this.email,this.password);

       this.demoService.postData();
       

  }

}
