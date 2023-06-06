import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reative-forms',
  templateUrl: './reative-forms.component.html',
  styleUrls: ['./reative-forms.component.css']
})
export class ReativeFormsComponent implements OnInit {

constructor (
  private formBuilder: FormBuilder
){  }
public userForm = this.formBuilder.group({
  fullname: ["", [Validators.required, Validators.minLength(5)]],
  email: ["", [Validators.required, Validators.email]]
})
ngOnInit(): void{
}
submitForm(){
  // console.log(this.userForm.get('fullname')?.value);
  // console.log(this.userForm.value.fullname);
  this.userForm.patchValue({fullname: "Adewale Toheeb"})
  // console.log(this.userForm.value.fullname);
  console.log(this.userForm);

}
}
