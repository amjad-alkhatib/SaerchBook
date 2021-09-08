import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchBooksComponent} from "./search-books.component";
import {BookService} from "../service/book.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {NgxPaginationModule} from "ngx-pagination";
const postMock = {
  kind: "books#volume",
  id: "pjtGAAAAMAAJ",
  volumeInfo: {
    title: "Catalogue Series: Suppl.1.Arabic collection, Aziz S. Atiya Library for Middle East Studies",
    authors: [
      "University of Utah. Middle East Library"
    ],
    description: 1968,
    publisher: "Ithaca Press",
    industryIdentifiers: [
      {
        type: "OTHER",
        identifier: "UOM:39015034619976"
      }
    ],
    imageLinks: {
      smallThumbnail: "http://books.google.com/books/content?id=pjtGAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail: "http://books.google.com/books/content?id=pjtGAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    language: "en",
  },
  saleInfo: {
    country: "JO",
  },
  accessInfo: {
    country: "JO",
  }

};


describe('SearchBooksComponent', () => {
  let component: SearchBooksComponent;
  let fixture: ComponentFixture<SearchBooksComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,NgxPaginationModule],
      declarations: [SearchBooksComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

describe('BookService with mock data', () => {
  let service: BookService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,NgxPaginationModule],
    });
    service = TestBed.inject(BookService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  it('search must get data as expected ', function () {
    service.searchBook("UOM:39015018853187", "isbn").subscribe((data: any) => {
      console.log('data is ', data);
      expect(data).toEqual(postMock);
    });
    const req = httpMock.expectOne("https://www.googleapis.com/books/v1/volumes?q=UOM:39015018853187+isbn");
    req.flush(postMock);
    httpMock.verify();
  });
});

