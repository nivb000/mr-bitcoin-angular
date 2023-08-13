import { Component, inject, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Transaction } from 'src/app/models/transaction.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  /* todo - why undefined needed ? */
  @Input() contactId!: string | undefined
  /* todo - can be in constructor private userService: UserService */
  userService = inject(UserService)
  constructor() { }

  sub!: Subscription
  loggedInUser!: User
  transactions!: any

  ngOnInit(): void {
    this.sub = this.userService.user$.subscribe(user => this.loggedInUser = user)
    this.transactions = this.loggedInUser?.transactions.slice(0,3)
    if(this.contactId) this.transactions = this.transactions.filter((t:Transaction) => t.toId === this.contactId)
  }
}
