import { Component, OnInit } from '@angular/core';
import { OauthService } from '../auth/data/services/oauth.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css'],
})
export class CoreComponent implements OnInit {
  constructor(private OAuthService: OauthService) {}

  ngOnInit() {
    this.OAuthService.listenEvents();
  }
}
