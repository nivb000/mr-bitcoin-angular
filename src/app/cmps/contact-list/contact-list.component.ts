import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {

  constructor() { }

  @Input() contacts!: Contact[]
  @Output() onRemove = new EventEmitter<string>()


  onRemoveContact(ev:string){
    this.onRemove.emit(ev)
  }
  // todo - should manage by module
}
