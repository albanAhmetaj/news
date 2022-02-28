import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  errorMessage: String;
  posts = [];
  myProfileID;

  constructor(
    private dataSv: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPosts();
    this.getMyProfile();
  }

  getMyProfile() {
    this.dataSv.getMyProfile().subscribe({
      next: (myProfile) => {
        this.myProfileID = myProfile._id;
      },
      error: (err) => console.log(err),
    });
  }

  getPosts() {
    setTimeout(() => {
      this.dataSv.getPosts().subscribe({
        next: (posts) => {
          this.posts = posts;
        },
        error: (err) => {
          this.errorMessage = err;
        },
      });
    }, 100);
  }

  goToCreate() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }

  cancelDelete(): void {}

  deletePost(postID) {
    this.router.navigate(['adminpanel/posts']);
    this.dataSv.deletePost(postID).subscribe(
      (res) => {
        // console.log(res);
      },
      (err) => console.log(err)
    );
    this.getPosts();
    this.router.navigate(['adminpanel/posts']);
  }
}
