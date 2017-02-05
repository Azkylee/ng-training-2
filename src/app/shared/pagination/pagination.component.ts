import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() totalItems : number;
  @Input() nbPerPage: number;

  nbPages : number;
  pages: number[];

  constructor() { }

  ngOnInit() {
    if(!this.totalItems || !this.nbPerPage) return;

    this.nbPages = Math.abs(Math.ceil(this.totalItems) / this.nbPerPage);
    this.pages = new Array(this.nbPages);
  }

}
