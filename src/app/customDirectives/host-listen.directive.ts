import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostListen]'
})
export class HostListenDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    
  }
  @HostListener('mouseenter') onMouseOver(){
    this.renderer.setStyle(this.element.nativeElement, 'margin', '5px 10px');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '30px 30px');
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.removeStyle(this.element.nativeElement, 'margin');
    this.renderer.removeStyle(this.element.nativeElement, 'padding');
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
  }

}
