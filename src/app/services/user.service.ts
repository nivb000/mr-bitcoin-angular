import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { Transaction } from '../models/transaction.model'

interface Creds {
  username: string
  password: string
}


@Injectable({
  providedIn: 'root'
})


export class UserService {


  private KEY = 'loggedInUser'
  private _user$ = new BehaviorSubject<User>(this.getLoggedInUser() || null)
  public user$ = this._user$.asObservable();
  // private _transactions$ = new BehaviorSubject<Array<object>>([])
  // public transactions$ = this._transactions$.asObservable();

  constructor() { }

  users: User[] = [{ fullName: 'Puki aaa', userName: 'puki', balance: 100, transactions: [] }]

  getUser() {
    return this.user$
  }

  login(userCreds: Creds) {
    const user = this.users.find(user => user.userName === userCreds.username)
    if (user) {
      sessionStorage.setItem(this.KEY, JSON.stringify(user))
      this._user$.next(user)
    }
    return 'No user founds'
  }

  getLoggedInUser() {
    const user = sessionStorage.getItem(this.KEY)
    if (user) {
      return JSON.parse(user)
    }
  }

  logout() {
    const user: any = null
    this._user$.next(user as User)
    sessionStorage.clear()
  }

  addTransaction(transaction: Transaction) {
    const user = this._user$.value
    if(user && transaction.amount){
      user.transactions.push(transaction)
      user.balance -= transaction.amount
      this._user$.next(user)
      sessionStorage.setItem(this.KEY, JSON.stringify(user))
    }
  }
}
