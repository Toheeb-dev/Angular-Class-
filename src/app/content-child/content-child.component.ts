import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.css']
})
export class ContentChildComponent implements OnInit, AfterContentInit {


  constructor(){

  }
  ngOnInit(){

  }
  ngAfterContentInit(): void {
    console.log(this.paragraphText.nativeElement.textContent);
    this.paragraphText.nativeElement.textContent = 'It has been change by the child component'
    console.log(this.paragraphText.nativeElement.textContent);
    
  }
  @ContentChild('paragraph')
  paragraphText!: ElementRef;
}
