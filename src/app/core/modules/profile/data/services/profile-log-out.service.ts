import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProfileLogOutService {
  constructor(private router: Router) {}

  public execute() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('token_type');
    this.router.navigate(['auth']);
  }
}
