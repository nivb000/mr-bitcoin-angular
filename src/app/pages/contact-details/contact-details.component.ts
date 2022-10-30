import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { Transaction } from 'src/app/models/transaction.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {
  //Imports using inject
  route = inject(ActivatedRoute)
  router = inject(Router)
  fBuilder = inject(FormBuilder)
  userService = inject(UserService)
  
  
  constructor() {
    this.transferForm = this.fBuilder.group({
      amount: [0]
    })
  }
  
  //Variables
  subscription!: Subscription
  contact!: Contact
  transferForm!: FormGroup
  sub!: Subscription
  loggedInUser!: User
  
  async ngOnInit() {
    this.subscription = this.route.data.subscribe(data => {
      const contact = data['ContactResolverResolver']
      if(contact) this.contact = contact
    })
    this.sub = this.userService.user$.subscribe(user => this.loggedInUser = user)
  }

  sendTransaction(){
    const {amount} = this.transferForm.value
    const transaction: Transaction = {
      fromName: this.loggedInUser.fullName,
      toId: this.contact._id,
      amount,
      at: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
    }
    console.log('transaction ready is', transaction);
    this.userService.addTransaction(transaction)
  }

  onGoBack(){
    this.router.navigateByUrl('/contact')
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
