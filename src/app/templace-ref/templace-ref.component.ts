import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templace-ref',
  templateUrl: './templace-ref.component.html',
  styleUrls: ['./templace-ref.component.css']
})
export class TemplaceRefComponent implements OnInit {

  constructor(){

  }

  ngOnInit(): void {
    
  }


sayHello(helloInp: HTMLInputElement){
  alert('Hello '+ helloInp.value)
  console.log(helloInp)
}
  
}
