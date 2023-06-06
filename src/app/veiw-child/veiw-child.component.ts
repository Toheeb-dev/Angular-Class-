import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-veiw-child',
  templateUrl: './veiw-child.component.html',
  styleUrls: ['./veiw-child.component.css']
})
export class VeiwChildComponent implements OnInit {

  constructor(){  }

  ngOnInit(): void {
    
  }

  title= 'viewChild';
  @ViewChild('myDOB') dateOfbirth: ElementRef ;
  @ViewChild('myAge') age: ElementRef ;

  calculateAge(){
    let birthYear = new Date()
  }


}
