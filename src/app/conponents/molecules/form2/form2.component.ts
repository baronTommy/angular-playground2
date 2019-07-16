import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  fg: FormGroup;
  constructor(  ) {   }

  ngOnInit() {
    this.fg = (new FormBuilder()).group({
      xxx: new FormControl(),
      yyy: new FormControl('initValue', Validators.email),
    })
  }

  onSubmit() {
    console.log(this.fg.valid)
    // console.log(this.fg.value)
  }
}
