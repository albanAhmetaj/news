import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
})
export class MyProfileComponent implements OnInit {
  myProfile: any;

  constructor(private dataSv: DataService) {}

  ngOnInit(): void {
    this.getMyProfile();
  }

  getMyProfile() {
    this.dataSv.getMyProfile().subscribe({
      next: (myProfile) => {
        this.myProfile = myProfile;
      },
      error: (err) => console.log(err),
    });
  }
}
