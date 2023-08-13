import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  /* todo - best organize to angular components implement in all project
  * 1. output/inputs
  * 2. parameters
  * 3. constructors
  * 4. ngOnInit/ngOnDestroy ....
  * 5. methods
  * 6. getters/setters - only for form */
  /* todo - if not on used delete */
  constructor() { }

  navIsOpen: boolean = false


  toggleNav(){
    this.navIsOpen = !this.navIsOpen
  }
  // todo - move to separate folfer called "layout"
}
