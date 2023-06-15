import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppClass]'
})
export class AppClassDirective {

  constructor( private element: ElementRef, private renderer: Renderer2) { }

  @Input()  set appAppClass (value: Object){
    // console.log(value);
  let entries = Object.entries(value);
  // for (let entry of entries){ 
    for (let [className, condition] of entries){
    if(condition)
    this.renderer.addClass(this.element.nativeElement, className)
  }
  }

}
