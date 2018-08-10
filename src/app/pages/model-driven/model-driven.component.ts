import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../validation/password-match.directive';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit {

  registerForm = new FormGroup({
    acc: new FormControl('micha', [Validators.required, Validators.minLength(3)]),
    pw1: new FormControl('', Validators.required),
    pw2: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    zip: new FormControl('', Validators.pattern('[0-9]{5}'))
  }, { validators: passwordMatchValidator });

  get acc() { return this.registerForm.get('acc'); }

  /*

  registerForm = this.fb.group({
    acc: ['micha', [Validators.required, Validators.minLength(3)]],
    pw1: ['', Validators.required],
    pw2: ['', [Validators.required]],
    email: ['', Validators.required],
    zip: ['', Validators.pattern('[0-9]{5}')],
  }, { validators: passwordMatchValidator });

  */

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }
}
