import { Component, EventEmitter, Input, Output, QueryList, Type, ViewChildren  } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FIELD_COMPONENTS, FormModel } from '../classes/FormModel';
import { FieldComponent } from '../classes/FieldComponent';
import { StringFieldComponent } from '../string-field/string-field.component';

@Component({
  selector: 'msplits-reactive-formx',
  templateUrl: './formx.component.html',
  styleUrls: ['./formx.component.css']
})
export class FormxComponent {

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
      formGroup.addControl(field.name,new FormControl(field.value));
    });
    return formGroup;
  }

  fieldsConponents:{[ket:string]:Type<FieldComponent>}={[FIELD_COMPONENTS.string]:StringFieldComponent};

  getFieldComponent(type:string):  Type<FieldComponent> {
    return this.fieldsConponents[type];
  }

}



