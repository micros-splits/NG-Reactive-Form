import { ValidatorFn } from "@angular/forms";

export class FormModel{
    title:string;
    fields:FieldModel[]=[];
}


export class FieldModel<ValueType=any>{
    name:string;
    label?:string="";
    value:ValueType;
    fieldComponent?:string;
    validators?:ValidatorFn[];
}


export var FIELD_COMPONENTS={
    string:"string",
    number:"number",
}