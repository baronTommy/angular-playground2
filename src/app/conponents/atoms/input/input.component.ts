import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor,NG_VALUE_ACCESSOR, NG_VALIDATORS, FormGroup,FormControl, Validator, Validators,AbstractControl, ValidationErrors } from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    },
     {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor, Validator {
    public inputForm: FormGroup = new FormGroup({
      inputFormControl: new FormControl(""),
    });

    constructor() { 
    }
  
    ngOnInit() {
      console.log(this)
    }
  
    public onTouched: () => void = () => {};
  
    writeValue(val: any): void {
      val && this.inputForm.setValue(val, { emitEvent: false });
    }
    registerOnChange(fn: any): void {
      console.log("on change");
      this.inputForm.valueChanges.subscribe(fn);
    }
    registerOnTouched(fn: any): void {
      console.log("on blur");
      this.onTouched = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
      isDisabled ? this.inputForm.disable() : this.inputForm.enable();
    }
  
    validate(c: AbstractControl): ValidationErrors | null{
      console.log("ADress validation");
      return this.inputForm.valid ? null : { invalidForm: {valid: false, message: "xx"}};
    }

}

