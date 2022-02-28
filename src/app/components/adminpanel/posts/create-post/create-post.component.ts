import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  newPost: FormGroup;
  errors = [];
  image: File;

  get title() {
    return this.newPost.get('title');
  }
  get description() {
    return this.newPost.get('description');
  }

  constructor(
    private _location: Location,
    private fb: FormBuilder,
    private dataSv: DataService
  ) {}

  ngOnInit(): void {
    this.newPost = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      image: [null],
    });
  }

  goBack() {
    this._location.back();
  }

  // Image upload
  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = <File>event.target.files[0];
      this.image = file;
    }
  }

  createNewPost() {
    const formData = new FormData();
    let newPost = this.newPost.value;
    formData.append('title', newPost.title);
    formData.append('description', newPost.description);
    formData.append('file', this.image);
    this.dataSv.createPost(formData).subscribe({
      next: (newPost) => {
        // console.log(newPost);
        this.newPost.reset();
        this._location.back();
      },
      error: (err) => console.log(err),
    });
  }
}
