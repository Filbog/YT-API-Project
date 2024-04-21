import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  playlistId1: string = 'PLsieoErhQydfwewteOlvSpNXAxduTz612'
  playlistName1: string = ''
  playlistId2: string = 'PLEVDfVkikQGFb7E-ymnsxA4X0eOB-FJc_'

  ngOnInit(): void {
      this.apiService.getPlaylistName(this.playlistId1).subscribe(
        (playlist) => {
          console.log(playlist.items[0].snippet.title)
          this.playlistName1 = playlist.items[0].snippet.title
        }
      );

      this.apiService.getPlayListItems(this.playlistId1).subscribe(
        (items) =>{
          console.log(items)
        }
      )

  }

  constructor(private apiService: ApiService){

  }
}
