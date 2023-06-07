import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DemoComponent } from '../demo/demo.component';

@Component({
  selector: 'app-veiw-child',
  templateUrl: './veiw-child.component.html',
  styleUrls: ['./veiw-child.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class VeiwChildComponent implements OnInit {

  constructor(){  }

  ngOnInit(): void {
    
  }

  title= 'viewChild';
  @ViewChild('myDOB') dateOfbirth!: ElementRef  ;
  @ViewChild('myAge') age!: ElementRef ;
  @ViewChild(DemoComponent, {static:true}) demoComp!: DemoComponent;

  calculateAge(){
    let birthYear = new Date(this.dateOfbirth.nativeElement.value).getFullYear()
    let currentYear = new Date().getFullYear()
    console.log(birthYear, currentYear);
    let realAge = currentYear - birthYear
    this.age.nativeElement.value = realAge
    // console.log(this.dateOfbirth);
    // console.log(this.age);
    
    
    
  }


}
