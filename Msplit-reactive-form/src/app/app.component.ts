import { Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StringFieldComponent } from './msplits-formx/string-field/string-field.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private formBuilder: FormBuilder) {}

  x=StringFieldComponent;
submitIt() {
  console.log(this.profileForm.value);
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

}
