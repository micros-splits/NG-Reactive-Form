import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { KeyValue } from '@angular/common';
import { FieldModel } from '../classes/FormModel';

@Component({
  selector: 'msplits-reactive-strfield',
  templateUrl: './string-field.component.html',
  styleUrls: ['./string-field.component.css']
})
export class StringFieldComponent {
  @Input() form:FormGroup;
  @Input() fieldModel:FieldModel;

}
