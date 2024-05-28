import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetResponseRoutingModule } from './get-response-routing.module';
import { GetResponseComponent } from './get-response.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GetResponseComponent
  ],
  imports: [
    CommonModule,
    GetResponseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class GetResponseModule { }
