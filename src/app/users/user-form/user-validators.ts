import {AbstractControl} from "@angular/forms";
export class UserValidators {

    static emailMustBeValid(control: AbstractControl) {

        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        let valid = emailRegex.test(control.value);

        return valid ? null : {emailMustBeValid: true};

    }

}
