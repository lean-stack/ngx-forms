import { Directive, Input } from '@angular/core';
import { ValidatorFn, FormGroup, ValidationErrors, NG_VALIDATORS, Validator, AbstractControl, FormControl } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const pw1 = control.get('pw1');
  const pw2 = control.get('pw2');

  if ( pw1 && pw2 && pw1.value !== pw2.value ) {
    const error = pw1 && pw2 && pw1.value !== pw2.value ? { 'passwordMismatch': true } : null;
    pw2.setErrors(error);
    return error;
  } else {
    return null;
  }
};

@Directive({
  selector: '[appPasswordMatch]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordMatchDirective, multi: true }]
})
export class PasswordMatchDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors {
    return passwordMatchValidator(control);
  }

}

@Directive({
  selector: 'input[appMatchField]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MatchFieldDirective, multi: true }]
})
export class MatchFieldDirective implements Validator {
  
  @Input()
  appMatchField: FormControl;

  validate(c: AbstractControl): ValidationErrors {
    
    const thisValue = c.value;
    const thatValue = this.appMatchField.value;

    return thisValue && thatValue && thisValue !== thatValue ? { 'passwordMismatch': true } : null;
  } 


}