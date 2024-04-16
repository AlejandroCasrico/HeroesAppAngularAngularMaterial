import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/interfaces/user';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {
  public sideBarItems = [
    {label:"listado",icon:"label",url:"./list"},
    {label:"Añadir",icon:"add",url:"./new-hero"},
    {label:"Buscar",icon:"search",url:"./search"},
  ]
  constructor(private userService:AuthService, private router:Router){
  }
  get User():User | undefined{
    return this.userService.currentUser;
  }
  onLogout(){
   this.userService.logOut();
   this.router.navigate(['/auth/login'])
  }
}
