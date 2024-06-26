export class FormModel{
    title:string;
    fields:FieldModel[]=[];
}


export class FieldModel<ValueType=any>{
    name:string;
    label:string="";
    value:ValueType;
    fieldComponent:string;
}


export var FIELD_COMPONENTS={
    string:"string"
}