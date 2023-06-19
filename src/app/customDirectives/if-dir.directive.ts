import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appIfDir]'
})
export class IfDirDirective {

  constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input('appIfDir') set displayView(conditon:boolean ){
    if(conditon){
      this.viewContainer.createEmbeddedView<any>(this.template)
    } else {
      this.viewContainer.clear()
    }
  }

}
