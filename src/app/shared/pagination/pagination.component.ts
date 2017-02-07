import {Component, OnInit, Input, OnChanges, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {

    @Input() totalItems: number;
    @Input() nbPerPage: number;
    @Output() pageChange: EventEmitter<any> = new EventEmitter();

    pages: number[];
    currentPage: number = 0;

    constructor() {
    }

    ngOnInit() {
        if (!this.totalItems || !this.nbPerPage) return;

        this._generatePaginationArray(this.totalItems, this.nbPerPage);
    }

    ngOnChanges(changes) {
        let nbItems = changes.totalItems.currentValue;
        let nbPerPage = changes.nbPerPage ? changes.nbPerPage.currentValue : this.nbPerPage;
        this.currentPage = 0;

        if (nbItems) {
            this._generatePaginationArray(nbItems, nbPerPage);
        }
    }

    changePage(newPageNumber: number) {
        if (newPageNumber >= 0 && newPageNumber < this.pages.length) {
            this.currentPage = newPageNumber;
            this.pageChange.emit({newPageNumber: this.currentPage});
        }
    }

    private _generatePaginationArray(nbItems: number, nbPerPage: number) {

        let nbPages: number = Math.abs(Math.ceil(nbItems) / nbPerPage);

        this.pages = Array.apply(null, Array(nbPages)).map((x, i) => i);
    }
}
