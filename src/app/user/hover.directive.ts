import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive ({
    selector: '[appHover]'
})
export class HoverDirective {
    @HostBinding ('class.hovered') isHovered = false;
    @HostListener('mouseenter') onmouseenter() {
        this.isHovered = true;
    }

    @HostListener('mouseleave') onmouseleave() {
        this.isHovered = false;
    }
}