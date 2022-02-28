import { Injectable } from '@angular/core';
import { Constant } from 'src/app/helpers/constants/constant';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  get_posts_url = Constant.get_posts;
  get_managers_url = Constant.get_managers;
  get_authors_url = Constant.get_authors;
  create_post_url = Constant.create_post;
  my_profile_url = Constant.my_profile;

  constructor(private _http: HttpClient) {}

  getPosts() {
    return this._http.get<any>(this.get_posts_url).pipe(
      // tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getMangers() {
    return this._http.get<any>(this.get_managers_url).pipe(
      // tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getAuthors() {
    return this._http.get<any>(this.get_authors_url).pipe(
      // tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  createPost(newPost) {
    return this._http
      .post<any>(this.create_post_url, newPost)
      .pipe(catchError(this.handleError));
  }

  getPost(id) {
    return this._http.get<any>(`${this.get_posts_url}/${id}`).pipe(
      // tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  editPost(editedPost, id) {
    return this._http.put<any>(`${this.get_posts_url}/${id}`, editedPost).pipe(
      // tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  deletePost(id) {
    return this._http.delete<any>(`${this.get_posts_url}/${id}`);
  }

  deleteManager(id) {
    return this._http.delete<any>(`${this.get_managers_url}/${id}`);
  }

  deleteAuthor(id) {
    return this._http.delete<any>(`${this.get_authors_url}/${id}`);
  }

  getMyProfile() {
    return this._http.get<any>(this.my_profile_url).pipe(
      // tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  // Error handler
  private handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.status}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
