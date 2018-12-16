import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Role } from '../classes/role';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  public checkAdmin(): boolean {
    return this.authService.user.role.toString()==Role[2];
  }

}
