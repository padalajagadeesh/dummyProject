import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
 
  imageUrl: any;
  dataArray: any;

  ngOnInit(){
    console.log('888888888')
  this.dataArray = localStorage.getItem('signUp*&') || []
  let arr = JSON.parse(this.dataArray)
    console.log(this.dataArray,'99')
    arr.forEach((v:any)=>{
      this.imageUrl=v.signImg 
      console.log(this.imageUrl,'00')
    })
  }

}
