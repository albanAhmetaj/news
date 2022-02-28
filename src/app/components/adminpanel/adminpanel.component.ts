import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css'],
})
export class AdminpanelComponent implements OnInit {
  constructor() {}
  onlyAdminpanel: boolean;

  ngOnInit(): void {}

  get getRole(): any {
    return localStorage.getItem('role');
  }
}
