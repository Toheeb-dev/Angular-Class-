import { Directive, ElementRef, HostBinding, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHostbidding]'
})
export class HostbiddingDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input() defaultColor: string = 'transparent';
  @Input('appHostbidding') highlightColor: string = 'pink'

  @HostBinding('style.backgroundColor') background: string = this.defaultColor
  @HostBinding('style.border') border: string = 'none'
  @HostListener('mouseenter') onmouseEnter(){
    this.background = this.highlightColor
    this.border = 'red 2px solid'
  }
  @HostListener('mouseleave') onmouseleave(){
    this.background = this.defaultColor
    this.border = 'none'
  }

  ngOnInit(){
    this.background = this.defaultColor
  }

}
