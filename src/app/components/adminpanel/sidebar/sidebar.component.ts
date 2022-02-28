import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor() {}
  onlyAdminpanel: boolean;

  ngOnInit(): void {}

  get getRole(): any {
    return localStorage.getItem('role');
  }
}
