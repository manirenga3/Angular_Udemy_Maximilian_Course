import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: `<p>Servers</p>
  //   <app-server></app-server>`,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  newServerName: string = 'TestServer';
  serverCreated = false;
  servers = ['Testserver1', 'testserver2'];

  constructor() {
    setTimeout(() => (this.allowNewServer = true), 3000);
  }

  ngOnInit(): void {}

  onCreateServer(e) {
    console.log(e);
    console.log(e.target);
    this.serverCreated = true;
    this.servers.push(this.newServerName);
    return (this.serverCreationStatus = `Server was created and name is ${this.newServerName}`);
  }

  onUpdateServerName(e: Event) {
    // console.log(e);
    this.newServerName = (<HTMLInputElement>e.target).value;
  }
}
