import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  @Output() gameStart = new EventEmitter<number>();
  interval: NodeJS.Timeout;
  value = 0;

  constructor() {}

  ngOnInit(): void {}

  onGameStart() {
    this.interval = setInterval(() => {
      this.gameStart.emit(this.value + 1);
      this.value++;
    }, 1000);
  }

  onGameStop() {
    clearInterval(this.interval);
  }
}
