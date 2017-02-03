import {Component, OnInit} from '@angular/core';
import {UserService} from "./user.service";
import {User} from "./user";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
    providers: [UserService]
})
export class UsersComponent implements OnInit {

    listUsers: User[];
    isLoading: boolean = true;

    constructor(private _userService: UserService) {
    }

    ngOnInit() {

        this._userService.getUsers()
            .subscribe(
                users => {
                    this.listUsers = users;
                },
                error => {
                    console.error(error)
                },
                () =>  {
                    console.info('Users loading complete');
                    this.isLoading = false;
                }
            );

    }

}
