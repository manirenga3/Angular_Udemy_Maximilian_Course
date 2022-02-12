import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  user = {
    email: "",
    password: "",
    subscription: "",
  };
  isSubmitted = false;
  @ViewChild("f") form: NgForm;

  onSubmit() {
    this.isSubmitted = true;
    this.user.email = this.form.value.email;
    this.user.password = this.form.value.password;
    this.user.subscription = this.form.value.subscription;

    this.form.reset();
  }
}
