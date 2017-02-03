import {Component, OnInit} from '@angular/core';
import {Post} from "./post";
import {PostService} from "./post.service";

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css'],
    providers: [PostService]
})
export class PostsComponent implements OnInit {

    listPost: Post[];
    isLoading: boolean = true;
    selectedPost : Post;

    constructor(private _postService: PostService) {
    }

    ngOnInit() {

        this._postService.getPosts()
            .subscribe(
                posts => this.listPost = posts,
                error => {
                    console.error(error);
                    this.isLoading = false;
                },
                () => {
                    console.info('Get posts action completed');
                    this.isLoading = false;
                })
    }

    selectPost(post : Post) {
        this.selectedPost = post;
    }
}



