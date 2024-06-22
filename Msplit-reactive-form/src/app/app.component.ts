import { Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StringFieldComponent } from './msplits-formx/string-field/string-field.component';
import { FIELD_COMPONENTS, FormModel } from './msplits-formx/classes/FormModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private formBuilder: FormBuilder) {}

  x=StringFieldComponent;
  submitIt(formObj:any) {
    console.log(formObj);
  }

  title = 'Msplit-reactive-form';
  profileForm2:FormGroup=new FormGroup({
    firstName:new FormControl('a'),
    lastName:new FormControl('b')
  });

  profileForm:FormGroup=this.formBuilder.group({
    firstName:['val1',Validators.required],
    lastName:['val2'],
  });

  formModel: FormModel={
    title:"",
    fields:[
      {label:"First Name",name:"firstName",value:"manar",fieldComponent:FIELD_COMPONENTS.string,validators:[Validators.required,Validators.minLength(4),Validators.maxLength(2)]},
      {name:"lastName",value:"Alkull"},
      {label:"amount",name:"amount",value:"1",fieldComponent:FIELD_COMPONENTS.number},
    ]
  };


}
