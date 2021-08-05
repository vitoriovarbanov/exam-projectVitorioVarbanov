import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SafePipe } from './safe.pipe';


@NgModule({
  declarations: [ProfileComponent, SafePipe],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
