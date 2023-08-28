import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { Transaction } from 'src/app/models/transaction.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit, OnChanges {

  @Input() contactName!: string
  userService = inject(UserService)
  router = inject(Router)

  sub!: Subscription
  loggedInUser!: User
  transactions!: any

  ngOnInit(): void {
    this.sub = this.userService.user$.subscribe(user => this.loggedInUser = user)
    this.transactions = this.loggedInUser?.transactions
    if(this.contactName) this.transactions = this.transactions.filter((t:Transaction) => t.toName === this.contactName)
  }

  ngOnChanges(changes: SimpleChanges): void {    
  }
}
