import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

  

@Directive({

  selector: '[appBtn]'

})

export class BtnDirective {

  

  constructor(

    private elementRef: ElementRef, 

    private renderer: Renderer2

    ) {

        this.setFontColor('red')

  }

  

  setFontColor(color: string) {

    this.renderer.setStyle(

      this.elementRef.nativeElement,

      'color',

      color

    )

  }

  

  //@HostListener('mouseenter') bob() { //can be anything
@HostListener('mouseenter') OnMouseEnter() {
    this.setFontColor('blue')

  }

  

  @HostListener('mouseleave') onMouseLeave() {

    this.setFontColor('red')

  }

  

}