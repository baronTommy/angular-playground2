import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';
import {Router} from "@angular/router"
import { HttpClientService } from '../../service/http-client.service';

interface InitValue {
  email: string
}

const initValue: InitValue = {
  email: ''
}

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  fg: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private httpClientService: HttpClientService
  ) {
    this.fb = new FormBuilder();
    this.createForm(initValue)
  }

  ngOnInit() {
    this.httpClientService.getUsers()

      // subscribe することで値が流れる
      .subscribe(
        // onNext
        // 新しい値が流れてきたときに
        r => {

          console.log({r})

          console.log('ok')
        },

        // onError
        // ストリームの途中でエラーが発生したときに
        e => console.log('ng'),
        
        // onComplete
        // 全ての値が流れきってストリームが終了した時に finaly とは違う
        () => console.log('complete')
      )



  }

  onSubmit() {
    // console.log(this.fg.controls.email.errors)
    // console.log(this.fg.value)
    // console.log(this.fg.get('email'));
    // console.log(this.fg.value);
    // console.log(this.fg.errors);
    // console.log(this.f.dirty);
    // console.log(this.f.valid);
    // this.fg.controls.email.setErrors({'xx': 'xxxx'})
    this.router.navigate(['/'])
  }

  private createForm(v: InitValue) {
    this.fg = this.fb.group({
      // email: this.fb.control(v.email, [Validators.required]),

      email:['', [Validators.required, Validators.email]]
    })
  }
}
