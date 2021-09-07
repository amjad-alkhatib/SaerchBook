import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
const key = 'AIzaSyCqn3mGuqjV81tQoCJJEeYC3TWIgIBnRxU';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  searchBook(searchType: string, text: string, startIndex?: number, maxResults?: number) {

    return this.http.get(`${BASE_URL}` + `${text}` + '+' + searchType + '&startIndex=' + startIndex + '&maxResults=' + maxResults);

  }


}
