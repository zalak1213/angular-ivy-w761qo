import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  name = 'Angular ' + VERSION.major;
  users:any;

  constructor(private _httpclient:HttpClient){

  }
  ngOnInit(){

  }
  getData(){
    this._httpclient.get('https://5e8bb871be5500001689ec86.mockapi.io/api/v1/employees').subscribe((data:any)=>{
      this.users=data;
    })

    
  }
  RemoveData(item){
    this.users.splice(this.users.indexOf(item),1);
  }
}
