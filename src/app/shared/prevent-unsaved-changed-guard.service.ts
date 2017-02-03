import {Injectable} from '@angular/core';
import {CanDeactivate} from "@angular/router";
import {IForm} from "./form";

@Injectable()
export class PreventUnsavedChangedGuardService implements CanDeactivate<IForm> {

    constructor() {
    }

    canDeactivate(component: IForm) {
        if (component.form.dirty) {
            return confirm('All your sure you want to leave, all your input will be lost')
        }

        return true;
    }

}
