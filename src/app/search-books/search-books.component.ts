import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BookService} from "../service/book.service";
import {BookModel} from "../model/book.model";
import {Consts} from "../consts/consts";

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {

  searchForm: FormGroup;
  books: BookModel[] = [];

  p: number = 1;
  previousPage = this.p;

  startIndex = 0;
  maxResults = Consts.PAGE_SIZE;

  totalItems: any;


  constructor(private bookService: BookService) {
    this.searchForm = new FormGroup({
      text: new FormControl('', [Validators.required]),
      searchType: new FormControl('intitle'),
    });
  }

  ngOnInit(): void {
  }

  search(page: any) {
    this.updatePageParams(page);
    const text = this.searchForm.controls['text'].value;
    const searchType = this.searchForm.controls['searchType'].value;

    this.bookService.searchBook(searchType, text, this.startIndex, this.maxResults).subscribe(
      (resData: any) => {
        console.log(resData);

        if (resData && resData.items.length > 0) {
          console.log('data found');
          this.books = resData.items;
          this.totalItems = resData.totalItems;
          console.log(this.books);
        } else {
          console.log('No Data found');

        }
      }
    )
  }


  private updatePageParams(page: any) {
    if (this.previousPage < page) {
      this.startIndex += this.maxResults * (page - this.previousPage);
    } else if (this.previousPage > page) {
      this.startIndex -= this.maxResults * (this.previousPage - page);
    }
    this.previousPage = page;
  }
  get f(){
    return this.searchForm.controls;
  }

}
