import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css'],
})
export class HooksComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
    
  }
  value :string = '';
  destroy : boolean = true;
  onSubmit(textValue: HTMLInputElement){
    this.value = textValue.value
  }

  destroyComp(){
    this.destroy = false
  }

}
