import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit, OnDestroy {

  route = inject(ActivatedRoute)
  router = inject(Router)
  contactService = inject(ContactService)

  
  constructor() {}
    
    sub!: Subscription
    contact!: Contact
    
  ngOnInit(): void {
    this.sub = this.route.data.subscribe(data => {
      const contact = data['Contact']
      this.contact = contact || this.contactService.getEmptyContact()
    })
  }

  onSaveContact(){
    this.contactService.saveContact(this.contact)
    this.router.navigateByUrl('/contact')
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
