import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";
import {FormGroup, FormBuilder} from "@angular/forms";

@Component({
    selector: 'app-users-dropdown-list',
    templateUrl: './dropdown-list.component.html',
    styleUrls: ['./dropdown-list.component.css'],
    providers: [UserService]
})
export class DropdownListComponent implements OnInit {

    @Output() userChange: EventEmitter<any> = new EventEmitter();

    form: FormGroup;
    selectedUser: any = '';
    listUsers: User[];
    isLoading: boolean = true;

    constructor(private _userService: UserService, private _fb: FormBuilder) {
        this.form = _fb.group({
            user: ['']
        });
    }

    ngOnInit() {
        this._userService.getUsers()
            .subscribe(
                users => this.listUsers = users,
                error => {
                    console.error(error);
                    this.isLoading = false;
                },
                () => {
                    console.info('Getting users completed');
                    this.isLoading = false;
                }
            );
    }

    changeUser() {
        this.selectedUser = this.form.controls['user'];

        if(this.selectedUser)
            this.userChange.emit({newUserId: this.selectedUser.value})
    }

}
