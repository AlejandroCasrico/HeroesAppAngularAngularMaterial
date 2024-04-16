import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPgeComponent } from './pages/register-pge/register-pge.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [CommonModule,
  AuthRoutingModule,MaterialModule],
  exports: [],
  declarations: [
    LayoutPageComponent,
    LoginPageComponent,
    RegisterPgeComponent
  ],
})
export class AuthModule {}
