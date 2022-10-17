import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pwa_angular';
  joke : any;

  constructor(private dataService :DataService){

  }

  ngOnInit(){
    this.getJokes();
  }

  reloadPage() {
    this.getJokes();
  }

  getJokes(){
    this.dataService.getJokes().subscribe(res =>{
      this.joke = res;
    })
  }

}
