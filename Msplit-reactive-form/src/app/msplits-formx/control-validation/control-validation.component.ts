import { KeyValue } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'msplits-reactive-control-validation',
  templateUrl: './control-validation.component.html',
  styleUrls: ['./control-validation.component.css']
})
export class ControlValidationComponent {

  getMessage(keyVal:KeyValue<string, any>):string {
    let func=(this.errorMEssages[keyVal.key])||((kv)=>keyVal.key);
    return func(keyVal);
}

@Input() control:FormControl;

errorMEssages:{[key:string]:(keyVal:KeyValue<string, any>)=>string}={
  "required":(kv)=>"this field is requierd",
  "maxlength":(kv)=>{console.log("maxlength",kv); return `maximum input lenght: '${kv.value.requiredLength}'. current length is: '${kv.value.actualLength}'`;},
  "minlength":(kv)=>"short input"
}

}
