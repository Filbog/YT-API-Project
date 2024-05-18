import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { SingleVideoInterface } from '../interfaces/single-video.interface';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  playlistId1: string = 'PLsieoErhQydfwewteOlvSpNXAxduTz612';
  playlistName1: string = '';
  playlistId2: string = 'PLEVDfVkikQGFb7E-ymnsxA4X0eOB-FJc_';
  playlistItems: SingleVideoInterface[] = [];

  ngOnInit(): void {
    this.apiService.getPlaylistName(this.playlistId1).subscribe((playlist) => {
      console.log(playlist.items[0].snippet.title);
      this.playlistName1 = playlist.items[0].snippet.title;
    });

    this.apiService.getPlayListItems(this.playlistId1).subscribe((items) => {
      this.playlistItems = items.items;
      console.log(this.playlistItems);
      // for (const playlistItem of this.playlistItems) {
      //   console.log(playlistItem.snippet.title);
      // }
    });
  }

  constructor(private apiService: ApiService) {}
}
