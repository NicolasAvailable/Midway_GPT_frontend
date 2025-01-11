import { Component, OnInit } from '@angular/core';
import { OauthGoogleService } from '../auth/data/services/oauth-google.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css'],
})
export class CoreComponent implements OnInit {
  constructor(private oAuthGoogleService: OauthGoogleService) {}

  ngOnInit() {
    this.oAuthGoogleService.listenEvents();
  }
}
