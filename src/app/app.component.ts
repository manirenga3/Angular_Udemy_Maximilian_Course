import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  gameStarted(e: number) {
    if (e % 2 === 0) {
      this.evenNumbers.push(e);
    } else {
      this.oddNumbers.push(e);
    }
  }
}
