import { Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StringFieldComponent } from './msplits-formx/string-field/string-field.component';
import { FIELDSTYPES, FormModel } from './msplits-formx/classes/FormModel';

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
      {label:"First Name",name:"firstName",value:"manar",type:FIELDSTYPES.string},
      {label:"Last Name",name:"lastName",value:"Alkull",type:FIELDSTYPES.string},
    ]
  };


}
