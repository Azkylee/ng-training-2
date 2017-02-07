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

    private _listPost: Post[];
    listFilteredPost: Post[];
    isLoading: boolean = true;
    selectedPost: Post;

    nbPerPage: number = 5;
    currentPage: number;

    constructor(private _postService: PostService) {
    }

    ngOnInit() {
        this.currentPage = 1;

        this._postService.getPosts()
            .subscribe(
                posts => {
                    this._listPost = posts;
                    this.listFilteredPost = posts;
                },
                error => {
                    console.error(error);
                    this.isLoading = false;
                },
                () => {
                    console.info('Get posts action completed');
                    this.isLoading = false;
                })
    }

    selectPost(post: Post) {
        this.selectedPost = post;
    }

    filterPostsByUser($event) {
        this.currentPage = 0;
        this.selectedPost = null;

        if ($event['newUserId'].length > 0)
            this.listFilteredPost = this._listPost.filter(post => post.userId == +$event['newUserId']);
        else
            this.listFilteredPost = this._listPost;
    }

    currentPageChange($event) {
        this.currentPage = $event.newPageNumber;
    }
}



