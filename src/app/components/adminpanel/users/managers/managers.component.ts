import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css'],
})
export class ManagersComponent implements OnInit {
  managers = [];
  errorMessage: string;

  gridStyle = {
    width: '100%',
  };

  constructor(private dataSv: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getManagers();
  }

  getManagers() {
    setTimeout(() => {
      this.dataSv.getMangers().subscribe({
        next: (managers) => {
          this.managers = managers;
        },
        error: (err) => {
          this.errorMessage = err;
        },
      });
    }, 100);
  }

  cancelDelete(): void {}

  deleteUser(managerID) {
    this.dataSv.deleteManager(managerID).subscribe(
      (res) => {
        // console.log(res);
      },
      (err) => console.log(err)
    );
    this.getManagers();
    this.router.navigate(['adminpanel/managers']);
  }
}
