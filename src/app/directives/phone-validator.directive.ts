import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appPhoneValidator]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: PhoneValidatorDirective, multi: true}
  ]
})
export class PhoneValidatorDirective {

  constructor() { }

  validate(control: AbstractControl): {[key: string] : any} | any{
if (control.value) {
    if (control.value.indexOf("+") === -1) {
      return {noCountryCode: true};
}
if (control.value.indexOf("+") !== 0) {
  return {notCorrect:true}
}
if (control.value.indexOf("+") !== 0) {
  return {notCorrect:true}
}

}
  }
}
