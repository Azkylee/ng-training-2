import {Component, OnInit, Input} from '@angular/core';
import {Comment} from "./comment";
import {PostService} from "../post.service";

@Component({
    selector: 'app-post-comments',
    templateUrl: './post-comments.component.html',
    styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {

    @Input() postId: number;
    listComments: Comment[];
    isLoading: boolean = true;

    constructor(private postService: PostService) {
    }

    ngOnInit() {
        return this.postService.getPostComments(this.postId)
            .subscribe(
                res => this.listComments = res,
                error => {
                    console.error(error);
                    this.isLoading = false;
                },
                () => {
                    console.info('Get comments completed')
                    this.isLoading = false;
                }
            )
    }

}
