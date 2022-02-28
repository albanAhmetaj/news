import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css'],
})
export class ShowPostComponent implements OnInit {
  post: any;
  postID: any;
  userProfile: any;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.postID = id;
    });
    this.getPost();
    this.getMyProfile();
  }

  getPost() {
    this.dataService.getPost(this.postID).subscribe({
      next: (post) => {
        this.post = post;
      },
      error: (err) => {
        this.errorMessage = err;
      },
    });
  }

  getMyProfile() {
    this.dataService.getMyProfile().subscribe({
      next: (userProfile) => {
        this.userProfile = userProfile;
      },
      error: (err) => console.log(err),
    });
  }
}
