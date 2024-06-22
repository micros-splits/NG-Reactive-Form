import { Component, EventEmitter, Input, Output, QueryList, Type, ViewChildren  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FIELD_COMPONENTS, FieldModel, FormModel } from '../classes/FormModel';
import { FieldComponent } from '../classes/FieldComponent';
import { StringFieldComponent } from '../string-field/string-field.component';
import { NumberFieldComponent } from '../number-field/number-field.component';
import { ControlValidationComponent } from '../control-validation/control-validation.component';

@Component({
  selector: 'msplits-reactive-formx',
  templateUrl: './formx.component.html',
  styleUrls: ['./formx.component.css']
})
export class FormxComponent {

  getControl(fieldName:string): FormControl<any> {
      return this.formGroup.controls[fieldName] as any;
  }

  formModel_:FormModel;
  formGroup:FormGroup;
  
  @Input()
  set formModel(formModel:FormModel){
    this.formModel_=formModel;
    this.formGroup=this.createFormGroup(formModel);
  }

  @Output() onSubmit:EventEmitter<any>=new EventEmitter();

  onSubmitx(){
    this.onSubmit.emit(this.formGroup.value);
  }

  private createFormGroup(formModel:FormModel): FormGroup {
    let formGroup=new FormGroup({});
    formModel.fields.forEach((field)=>{
      formGroup.addControl(field.name,new FormControl(field.value,field.validators??[]));
    });
    return formGroup;
  }

  fieldsConponents:{[ket:string]:Type<FieldComponent>}={
    [FIELD_COMPONENTS.string]:StringFieldComponent,
    [FIELD_COMPONENTS.number]:NumberFieldComponent,
  };

  getFieldComponent(type?:string):  Type<FieldComponent> {
    return this.fieldsConponents[type??FIELD_COMPONENTS.string];
  }

  controlValidationComponent:Type<ControlValidationComponent>=ControlValidationComponent;
}



