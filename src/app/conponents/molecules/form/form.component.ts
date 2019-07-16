import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from "@angular/forms";
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public nestedForm = new FormGroup({
    userName: new FormControl(''),
  });

  constructor() { }
  
  
  ngOnInit() {
  }
  
  public onSubmit(){
    console.log("Val", this.nestedForm.value);
  }
}

// たぶんバリデートがうまくいかない
