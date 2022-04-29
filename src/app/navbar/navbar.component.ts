import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public session: SessionService, private _router: Router,) { }

  ngOnInit(): void {
  }

  logout() {
    this.session.clear();
    this._router.navigate(['/login']);
  }

}
