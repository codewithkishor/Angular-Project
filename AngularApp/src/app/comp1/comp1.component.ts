import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/services/utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  userName;
  userName1;
  // DI 
  constructor(private _utilityService: UtilityService) {

    this._utilityService.userName.subscribe(res => {
      console.log('data comming from subject', res)
      this.userName = res;
      this.userName1 = res;
    }, err => {
      console.log('error occured', err);
    })

   }

  ngOnInit() {
  }

  updateUserName(uname, userName1)
  {
    this.userName = uname.value;
    this.userName1 = userName1.value;
    console.log(uname.value);
    console.log(userName1.value);

    this._utilityService.userName.next(uname.value);
    this._utilityService.userName.next(userName1.value);
  }
}
