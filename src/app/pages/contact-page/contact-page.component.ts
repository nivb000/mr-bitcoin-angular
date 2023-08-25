import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit, OnDestroy {

  constructor(private contactService: ContactService) { }

  contacts!: Contact[]
  contacts$!: Observable<Contact[]>
  subscription!: Subscription
  selectContactId = ''

  ngOnInit(): void {
    this.contactService.loadContacts({ term: '' })
    this.contacts$ = this.contactService.contacts$
    this.subscription = this.contactService.contacts$.subscribe(contacts => {
      this.contacts = contacts
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  onRemoveContact(contactId:string){
    this.contactService.deleteContact(contactId)
  }

}
