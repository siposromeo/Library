import { Component } from '@angular/core';
import { BookSearchModel } from '../../models/book-search.model';
import { HttpService } from '../../services/http.service';
import { FormsModule } from '@angular/forms';
import { BookModel } from '../../models/book.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
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

  books : BookModel[] = [];
  constructor (private httpService: HttpService) {}

  search(): void {
    this.httpService.bookList(this.searchModel).subscribe({
      next: (result: BookModel[]) => {
        this.books = result;
        console.log(this.books);

      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
