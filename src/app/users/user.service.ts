import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {User} from "./user";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

    private _url = 'https://jsonplaceholder.typicode.com/users';

    constructor(private _http: Http) {
    }

    getUsers(): Observable<User[]> {
        return this._http.get(this._url)
            .map(res => res.json());
    }

    saveUser(user: User) {
        return this._http.post(this._url, user)
            .map(res => res.json());
    }

    getUser(id: number) : Observable<User>{
        return this._http.get(this._url + '/' + id)
            .map(res => res.json());
    }

    updateUser(user: User) {
        return this._http.put(this._url + '/' + user.id, user)
            .map(res => res.json());
    }

    deleteUser(userId: number) {
        return this._http.delete(this._url + '/' + userId)
            .map(res => res.json());
    }

}
