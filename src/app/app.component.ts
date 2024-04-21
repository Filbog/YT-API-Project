import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestGoogleApiKeyComponent } from './test-google-api-key/test-google-api-key.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestGoogleApiKeyComponent, HomeComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  playlistId1: string = 'PLsieoErhQydfwewteOlvSpNXAxduTz612'
  playlistId2: string = 'PLEVDfVkikQGFb7E-ymnsxA4X0eOB-FJc_'
}
