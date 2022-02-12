import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { promise } from "protractor";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  genders = ["Male", "Female"];
  signUpForm: FormGroup;
  forbiddenUsernames = ["Mani", "Nithi"];

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmails
        ),
      }),
      gender: new FormControl(null),
      hobbies: new FormArray([new FormControl("coding")]),
    });

    // this.signUpForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });
    // this.signUpForm.statusChanges.subscribe((status) => {
    //   console.log(status);
    // });

    this.signUpForm.setValue({
      userData: {
        username: "Man",
        email: "man@gc.com",
      },
      gender: "Male",
      hobbies: ["cooking"],
    });
    this.signUpForm.patchValue({
      userData: {
        username: "Mani",
      },
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
    // console.log(this.signUpForm.get("hobbies"));

    this.signUpForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get("hobbies")).push(control);
  }

  get controls() {
    return (this.signUpForm.get("hobbies") as FormArray).controls;
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test@test.com") {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }
}
