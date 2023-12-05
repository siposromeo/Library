import { Component } from '@angular/core';
import { BookSearchModel } from '../../models/book-search.model';

@Component({
  selector: 'app-book-search',
  standalone: true,
  imports: [],
  templateUrl: './book-search.component.html',
  styleUrl: './book-search.component.css'
})
export class BookSearchComponent {

  searchModel: BookSearchModel = {
    from: 1,
    count: 20,
    title: '',
    author: '',
    isbn: ''
  };

  constructor (private httpService)
}
