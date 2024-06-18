import { Component, Input } from '@angular/core';
import { AbstractField } from '../AbstractField';
import { AbstractControl, FormGroup } from '@angular/forms';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'msplits-reactive-strfield',
  templateUrl: './string-field.component.html',
  styleUrls: ['./string-field.component.css']
})
export class StringFieldComponent {
  @Input() form:FormGroup;
  @Input() control:KeyValue<string,AbstractControl>;

}
