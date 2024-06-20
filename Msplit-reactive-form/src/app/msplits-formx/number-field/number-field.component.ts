import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldModel } from '../classes/FormModel';
import { FieldComponent } from '../classes/FieldComponent';

@Component({
  selector: 'msplits-reactive-number-field',
  templateUrl: './number-field.component.html',
  styleUrls: ['./number-field.component.css']
})
export class NumberFieldComponent implements FieldComponent {
  @Input() form:FormGroup;
  @Input() fieldModel:FieldModel;
}
