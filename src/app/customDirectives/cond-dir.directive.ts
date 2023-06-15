import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appCondDir]'
})
export class CondDirDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }


  @Input() set appCondDir(condition: boolean){
    if(condition){
      this.renderer.addClass(this.element.nativeElement, 'selected')
    }

  } 

}
