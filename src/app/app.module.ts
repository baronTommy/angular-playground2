import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MyFormComponent } from './conponents/my-form/my-form.component';

import {
  MatGridListModule,
  MatInputModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatListModule,
  MatCheckboxModule
} from '@angular/material';
import { InputComponent } from './conponents/atoms/input/input.component';
import { FormComponent } from './conponents/molecules/form/form.component';
import { Form2Component } from './conponents/molecules/form2/form2.component';
import { Input2Component } from './conponents/atoms/input2/input2.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    InputComponent,
    FormComponent,
    Form2Component,
    Input2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // --
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatListModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
