export class FormModel{
    title:string;
    fields:FieldModel[]=[];
}


export class FieldModel<ValueType=any>{
    name:string;
    label:string="";
    value:ValueType;
    type:string;
}


export var FIELDSTYPES={
    string:"string"
}