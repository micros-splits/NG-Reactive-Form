import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StringFieldComponent } from './msplits-formx/string-field/string-field.component';
import { FormxComponent } from './msplits-formx/formx/formx.component';
import { NumberFieldComponent } from './msplits-formx/number-field/number-field.component';
import { ControlValidationComponent } from './msplits-formx/control-validation/control-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    StringFieldComponent,
    FormxComponent,
    NumberFieldComponent,
    ControlValidationComponent
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
