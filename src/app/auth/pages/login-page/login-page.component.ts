import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private authS:AuthService, private router:Router){}

  onLogin(){
    this.authS.login('acas@gmail.com',"1234567")
      .subscribe(user =>{
          this.router.navigate(['/'])
      })
  }
}
