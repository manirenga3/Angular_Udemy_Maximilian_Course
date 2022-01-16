import { Component, OnInit } from "@angular/core";
import { UsersService } from "./user/users.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent implements OnInit {
  users: { id: number; name: string }[];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
  }
}
