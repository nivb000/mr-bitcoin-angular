import { Component, inject, OnInit } from '@angular/core';
import { lastValueFrom, Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  bitcoinService = inject(BitcoinService)
  userService = inject(UserService)

  constructor() { }

  currency: string = 'USD'
  ratesKey!: string[]
  rate!:any
  loggedInUser!:User
  subscribe!: Subscription

  async ngOnInit(): Promise<void> {
    this.ratesKey = await lastValueFrom(this.bitcoinService.getRatesKeys());
    this.subscribe = this.userService.user$.subscribe(user => this.loggedInUser = user)
    console.log('this user is', this.loggedInUser);
    
    this.getCurrencyRate()
  }
  
  async getCurrencyRate(currency?:string){
    if(currency){
      this.currency = currency
    }  
    this.rate = await lastValueFrom(this.bitcoinService.getRate());
    this.rate = this.rate[this.currency]
  }

  onLogout(){
    this.userService.logout()
  }

}
