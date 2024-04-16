import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Errro404PageComponent } from './shared/pages/errro404-page/errro404-page.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { publicGuard } from './auth/guards/public.guard';

const routes:Routes= [
  {
    path:"heroes",
    loadChildren:()=> import("./heroes/heroes.module").then(m =>m.HeroesModule),
    canActivate:[AuthGuard],
    canMatch:[AuthGuard]

  },
  {
    path:"auth",
    loadChildren:()=>import("./auth/auth.module").then(m=>m.AuthModule),
    canActivate:[publicGuard],
    canMatch:[publicGuard]

  },
  {
    path:"404",
    component:Errro404PageComponent
  },
  {
    path:"",
    redirectTo:"heroes",
    pathMatch:"full"
  },
  {
    path:"**",
    redirectTo:"404"
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
