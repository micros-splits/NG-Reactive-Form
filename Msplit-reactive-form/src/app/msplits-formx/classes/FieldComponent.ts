import { FormGroup } from "@angular/forms";
import { FieldModel } from "./FormModel";
import { Component, Input } from "@angular/core";

@Component({
    template: ''
  })
export class FieldComponent{
    @Input() form:FormGroup;
    @Input() fieldModel:FieldModel;
}
