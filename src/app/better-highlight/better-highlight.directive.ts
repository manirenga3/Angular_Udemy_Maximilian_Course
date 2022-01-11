import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = "white";
  @Input("appBetterHighlight") highlightColor: string = "blue";
  @HostBinding("style.backgroundColor") bgColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "blue"
    // );
    this.bgColor = this.defaultColor;
  }

  @HostListener("mouseenter") mouseenter(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "blue"
    // );
    this.bgColor = this.highlightColor;
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "white"
    // );
    this.bgColor = this.defaultColor;
  }
}
