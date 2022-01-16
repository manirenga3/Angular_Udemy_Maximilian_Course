import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Observable } from "rxjs";

import { ServersService } from "../servers.service";
import { canComponentDeactivate } from "./can-deactivate-guard.service";

@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"],
})
export class EditServerComponent implements OnInit, canComponentDeactivate {
  servers: { id: number; name: string; status: string }[];
  server: { id: number; name: string; status: string };
  checkId: boolean;
  serverName = "";
  serverStatus = "";
  allowEdit: boolean = false;
  changesSaved: boolean = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.servers = this.serversService.getServers();
    const id = +this.route.snapshot.params["id"];
    this.checkId = this.servers.some((server) => {
      return id === server.id;
    });
    if (this.checkId) {
      this.server = this.serversService.getServer(id);
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
      this.route.queryParams.subscribe((queryParams: Params) => {
        this.allowEdit = queryParams["allowEdit"] === "1" ? true : false;
      });
    }
    // console.log(this.route.snapshot.queryParams);
    // console.log(this.route.snapshot.fragment);
    // this.route.queryParams.subscribe((query: Params) => console.log(query));
    // this.route.fragment.subscribe((fragment: string) => console.log(fragment));
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changesSaved = true;
    this.router.navigate(["../"], {
      relativeTo: this.route,
      queryParamsHandling: "preserve",
    });
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.allowEdit) {
      return true;
    }
    if (
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.server.status) &&
      !this.changesSaved
    ) {
      return confirm("Do you want to discard the changes made?");
    } else {
      return true;
    }
  }
}
