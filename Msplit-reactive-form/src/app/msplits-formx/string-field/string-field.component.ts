import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { KeyValue } from '@angular/common';
import { FieldModel } from '../classes/FormModel';
import { FieldComponent } from '../classes/FieldComponent';

@Component({
  selector: 'msplits-reactive-strfield',
  templateUrl: './string-field.component.html',
  styleUrls: ['./string-field.component.css']
})
export class StringFieldComponent implements FieldComponent {
  @Input() form:FormGroup;
  @Input() fieldModel:FieldModel;
}
