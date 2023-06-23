import { Component, OnInit } from '@angular/core';
import { Album } from 'src/album';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit{
  //album:Album=new Album();
  albums:Album[]=[];
  artist: string='';

  constructor(private service: AlbumService) {}

  ngOnInit(): void{

  }

  findByArtist()
  {
    var temp=this.service.findByArtist(this.artist);
    if(temp!=null)
    this.albums=temp;
     
  }

}
