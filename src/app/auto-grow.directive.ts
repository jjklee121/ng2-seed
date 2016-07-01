import {Directive, ElementRef, Renderer} from '@angular/core'


@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})
export class AutoGrowDirective {

    constructor(private elementRef: ElementRef, private renderer: Renderer){
    }

    onFocus() {
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'width', '200px')

        console.log('on focus')
    }

    onBlur() {
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'width', '120px')

        console.log('on blur')
    }
}