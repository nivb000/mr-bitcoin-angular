import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {

  constructor() { }
  
  navIsOpen: boolean = false


  toggleNav(){
    this.navIsOpen = !this.navIsOpen
  }
}
