import { Component } from '@angular/core';
import { Album } from 'src/album';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent {
  albums:Album[]=[];
  genre: string='';

  constructor(private service: AlbumService) {}

  ngOnInit(): void{

  }

  findByGenre()
  {
    var temp=this.service.findByArtist(this.genre);
    if(temp!=null)
    this.albums=temp;
     
  }

}
