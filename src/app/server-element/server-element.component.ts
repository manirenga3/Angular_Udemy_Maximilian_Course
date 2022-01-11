import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input("srvElement") element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild("heading", { static: true }) header: ElementRef;
  @ContentChild("paraContent", { static: true }) para: ElementRef;

  constructor() {
    console.log("constructor called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
    console.log("Heading: " + this.header.nativeElement.textContent);
    console.log("Para: " + this.para.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");
    console.log("Para: " + this.para.nativeElement.textContent);
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
    console.log("Heading: " + this.header.nativeElement.textContent);
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy called");
  }
}
