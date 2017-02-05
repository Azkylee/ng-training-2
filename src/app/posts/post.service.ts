import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Post} from "./post";
import {Comment} from "./post-comments/comment"
import {Observable} from "rxjs";

@Injectable()
export class PostService {

    private _url = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private _http: Http) {
    }

    getPosts(): Observable<Post[]> {
        return this._http.get(this._url)
            .map(res => res.json() as Post[]);
    }

    getPostComments(postId: number): Observable<Comment[]> {
        return this._http.get(this._url + '/' + postId + '/comments')
            .map(res => res.json() as Comment[]);
    }

    getPostsFromUser(userId : number): Observable<Post[]> {
        return this._http.get(this._url + '?userId=' + userId)
            .map(res => res.json() as Post[]);
    }

}
