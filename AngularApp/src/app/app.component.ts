import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App';
  empCount;
  data = {
    name:'Kishor',
    dept: 'IT'
  }

  imageUrl = 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8='
  constructor(){
    this.getValueFromServer();
   
  }

  getValueFromServer(){
this.empCount = 1000;
}
currentTime() : any {
return Date.now();
}
}

