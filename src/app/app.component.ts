import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private auth: AuthService,
    private route: Router,
    ){}
  goHomeAndLogOut() {
    this.auth.logout();
    this.route.navigate(["/"]);
  }
}
