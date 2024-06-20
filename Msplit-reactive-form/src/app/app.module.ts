import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StringFieldComponent } from './msplits-formx/string-field/string-field.component';
import { FormxComponent } from './msplits-formx/formx/formx.component';
import { NumberFieldComponent } from './msplits-formx/number-field/number-field.component';

@NgModule({
  declarations: [
    AppComponent,
    StringFieldComponent,
    FormxComponent,
    NumberFieldComponent
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
