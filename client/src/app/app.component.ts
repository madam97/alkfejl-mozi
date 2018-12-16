import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor (
    private authService: AuthService,
    private titleService: Title
  ) {
    this.setTitle('Movies');
  }
  
  ngOnInit() {
    if (window.localStorage.getItem('token')) {
      this.authService.loginWithToken();
    }
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
