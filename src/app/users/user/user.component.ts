import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { UsersService } from "./users.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit, OnDestroy {
  users: { id: number; name: string }[];
  paramId: number;
  paramName: string;
  authenticate: boolean = true;
  user: { id: number; name: string };
  paramsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.users = this.usersService.getUsers();
    this.paramId = +this.route.snapshot.params["id"];
    this.paramName = this.route.snapshot.params["name"];
    this.authenticate = this.users.some(
      (user: { id: number; name: string }) => {
        return this.paramId === user.id && this.paramName === user.name;
      }
    );
    if (!this.authenticate) {
      this.router.navigate(["/not-found"]);
    }
    if (this.authenticate) {
      this.user = {
        id: this.route.snapshot.params["id"],
        name: this.route.snapshot.params["name"],
      };
      this.paramsSubscription = this.route.params.subscribe(
        (params: Params) => {
          this.user.id = params["id"];
          this.user.name = params["name"];
        }
      );
    }
  }

  ngOnDestroy(): void {
    if (this.authenticate) {
      this.paramsSubscription.unsubscribe();
    }
  }
}
