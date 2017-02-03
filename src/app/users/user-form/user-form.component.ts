import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IForm} from "../../shared/form";
import {UserValidators} from "./user-validators";
import {UserService} from "../user.service";
import {Router, ActivatedRoute} from "@angular/router";
import {User} from "../user";

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css'],
    providers: [UserService]
})
export class UserFormComponent implements OnInit, IForm {

    title: string;
    form: FormGroup;
    user = new User();

    constructor(private _fb: FormBuilder,
                private _userService: UserService,
                private _router: Router,
                private _activatedRoute: ActivatedRoute) {

        this.form = this._fb.group({
            name: [
                '',
                Validators.compose([
                    Validators.required
                ])
            ],
            email: [
                '',
                Validators.compose([
                    Validators.required,
                    UserValidators.emailMustBeValid
                ])
            ],
            phone: [
                ''
            ],
            address: this._fb.group({
                street: [
                    ''
                ],
                suite: [
                    ''
                ],
                city: [
                    ''
                ],
                zipcode: [
                    ''
                ]
            })
        })

    }

    ngOnInit() {

        this._activatedRoute.params
            .subscribe(params => {
                const id = +params['id'];

                this.title = id ? 'Edit user' : 'New user';

                if (id) {

                    this._userService.getUser(id)
                        .subscribe(
                            user => {
                                this.user = user;
                                console.info('User fetched:', user);
                            },
                            error => {
                                console.error(error);
                                if(error.status === 404)
                                    this._router.navigate(['user-not-found']);
                            },
                            () => console.info('Process GetUser is complete')
                        );

                }

            })

    }

    saveUser() {

        if (this.user.id) {

            this._userService.updateUser(this.user)
                .subscribe(
                    res => {
                        console.info('User updated successfuly', res);
                        this.form.markAsPristine();
                        this._router.navigate(['users']);
                    },
                    error => console.error('An error has occured'),
                    () => console.info('User update complete')
                );

        } else {

            this._userService.saveUser(this.user)
                .subscribe(
                    res => {
                        console.info('User saved successfuly', res);
                        this.form.markAsPristine();
                        this._router.navigate(['users']);
                    },
                    error => console.error('An error has occured'),
                    () => console.info('User insert completed')
                );

        }


    }

}
