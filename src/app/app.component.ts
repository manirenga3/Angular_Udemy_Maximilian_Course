import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f") form: NgForm;
  question = "";
  answer = "";
  genders = ["Male", "Female"];
  user = {
    username: "",
    email: "",
    gender: "",
    question: "",
    answer: "",
  };
  isSubmitted = false;

  suggestUserName() {
    const suggestedName = "Superuser";
    // this.form.setValue({
    //   gender: "",
    //   secretQn: { question: "", answer: "" },
    //   userdata: { username: suggestedName, email: "" },
    // });
    this.form.form.patchValue({
      userdata: { username: suggestedName },
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    this.user.answer = this.form.value.secretQn.answer;
    this.user.question = this.form.value.secretQn.question;
    this.user.email = this.form.value.userdata.email;
    this.user.username = this.form.value.userdata.username;
    this.user.gender = this.form.value.gender;

    this.form.reset();
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
}
