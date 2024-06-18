import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'msplits-reactive-formx',
  templateUrl: './formx.component.html',
  styleUrls: ['./formx.component.css']
})
export class FormxComponent {

  @Input() formGroup:FormGroup;
  @Output() onSubmit:EventEmitter<any>=new EventEmitter();

  onSubmitx(){
    this.onSubmit.emit(this.formGroup.value);
  }
}
