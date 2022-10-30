import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactResolverResolver } from './services/contact-resolver.resolver'

const routes: Routes = [
  {path: 'contact/edit/:id', component: ContactEditComponent, resolve: {Contact: ContactResolverResolver}},
  {path: 'contact/new', component: ContactEditComponent},
  {path: 'contact/:id', component: ContactDetailsComponent, resolve: {ContactResolverResolver}},
  {path: 'contact', component: ContactPageComponent},
  {path: 'stats', component: StatisticPageComponent},
  {path: 'login', component: LoginSignupComponent},
  {path: '', component: HomePageComponent}
];
// For children routes we need to declare <router-outlet> in the component

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
