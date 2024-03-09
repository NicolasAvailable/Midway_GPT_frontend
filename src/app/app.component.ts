import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.verifyIfUserIsLogged();
  }

  private verifyIfUserIsLogged() {
    const accessToken = localStorage.getItem('access_token');
    const accessTokenParsed = JSON.parse(accessToken!);
    if (accessTokenParsed) {
      this.changeRouteTo('app');
    } else {
      this.changeRouteTo('auth');
    }
  }

  private changeRouteTo(route: string) {
    this.router.navigate([route]);
  }
}
