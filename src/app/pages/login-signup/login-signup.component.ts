import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnDestroy {

  loginForm!: FormGroup
  loggedInUser!:User
  subscribe!: Subscription
  error!: string

  constructor(private userService: UserService, private fb: FormBuilder, private router: Router) { 
    this.loginForm = this.fb.group({
      username: ['']
    })
  }

  onLogin(){
    this.userService.login(this.loginForm.value)
    this.subscribe = this.userService.user$.subscribe(user => {
      if(!user){
        this.error = 'Wrong username'
        setTimeout(() => {
          this.error = ''
        }, 2000); 
      } else{
        console.log(this.loggedInUser);
        this.loggedInUser = user
        this.router.navigateByUrl('/')
      }
    })
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe()
  }


}
