import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  editPostData: FormGroup;
  errors = [];
  id = this.route.snapshot.params['id'];

  get title() {
    return this.editPostData.get('title');
  }
  get description() {
    return this.editPostData.get('description');
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _location: Location,
    private fb: FormBuilder,
    private dataSv: DataService
  ) {}

  ngOnInit(): void {
    this.getPost(this.id);
    this.editPostData = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  getPost(id) {
    this.dataSv.getPost(id).subscribe((data) => {
      this.editPostData.patchValue({
        title: data.title,
        description: data.description,
      });
    });
  }

  goBack() {
    this._location.back();
  }

  editPost() {
    let editedPost = this.editPostData.value;
    this.dataSv.editPost(editedPost, this.id).subscribe({
      next: (editedPost) => {
        this.getPost(this.id);
      },
      error: (err) => console.log(err),
    });
    this.router.navigate(['adminpanel/posts']);
  }
}
