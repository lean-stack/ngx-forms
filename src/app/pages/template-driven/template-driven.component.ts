import { Component, OnInit, ElementRef, ViewChild, ViewRef } from '@angular/core';
import { User } from '../../model/user';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  // Binding properties
  model = new User();
  passwordRepeated = '';

  @ViewChild('accountLabel')
  accountLabel: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log(this.accountLabel);
  }

  onSubmitAndContinue(form: NgForm) {
    console.log(this.model);
    form.reset();
  }

  onSubmit() {
    console.log(this.model);
  }

}
