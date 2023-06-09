import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appSetBackground]',
})
export class SetBackgroundDirective implements OnInit {
  private element!: ElementRef;
  constructor(element: ElementRef) { 
    // element.nativeElement.style.background = 'green'
    this.element = element
  }

  ngOnInit() {
    this.element.nativeElement.style.background = 'green'
    this.element.nativeElement.style.border = 'solid red'
  }
  
}
