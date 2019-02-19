import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  private id = 1;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo() {
    this.router.navigate(['/main', {id: this.id}]);
  }

}
