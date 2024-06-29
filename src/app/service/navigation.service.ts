import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(public router: Router) { }
  Back() {
    window.history.back();
  }

  GetChatByUser() {
    this.router.navigate(['/chat']);
  }
}
