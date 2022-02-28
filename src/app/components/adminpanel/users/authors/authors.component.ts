import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent implements OnInit {
  authors = [];
  errorMessage: string;

  gridStyle = {
    width: '100%',
  };

  constructor(private dataSv: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getAuthors();
  }

  getAuthors() {
    setTimeout(() => {
      this.dataSv.getAuthors().subscribe({
        next: (authors) => {
          this.authors = authors;
        },
        error: (err) => {
          this.errorMessage = err;
        },
      });
    }, 100);
  }

  cancelDelete(): void {}

  deleteUser(authorID) {
    this.dataSv.deleteAuthor(authorID).subscribe(
      (res) => {
        // console.log(res);
      },
      (err) => console.log(err)
    );
    this.getAuthors();
    this.router.navigate(['adminpanel/authors']);
  }
}
