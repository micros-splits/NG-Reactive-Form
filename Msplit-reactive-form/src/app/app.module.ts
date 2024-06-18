import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StringFieldComponent } from './msplits-formx/string-field/string-field.component';
import { FormxComponent } from './msplits-formx/formx/formx.component';

@NgModule({
  declarations: [
    AppComponent,
    StringFieldComponent,
    FormxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
