import { ViewChild, Self, Component, ElementRef } from '@angular/core';
import {
  NgControl,
  ControlValueAccessor,
  Validator,
  Validators,
} from '@angular/forms';
import { FormControl } from '@angular/forms';


// しないよりは、まし レベル
class ControlValueAccessors implements ControlValueAccessor {
  @ViewChild('input', null) input: ElementRef;

  disabled: boolean;
  onChange: (value: any) => void;
  onTouched: (value: any) => void;

  writeValue(obj: any) {
    this.input.nativeElement.value = obj;
  }

  registerOnChange(fn: any) { 
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}

@Component({
  selector: 'app-input2',
  templateUrl: './input2.component.html',
  styleUrls: ['./input2.component.css']
})
export class Input2Component extends ControlValueAccessors {
  constructor(@Self() public controlDir: NgControl) {
    super();
    controlDir.valueAccessor = this;
  }

  ngOnInit() {
    const control = this.controlDir.control;
    control.setValidators(control.validator);
    control.updateValueAndValidity();
  }
}
