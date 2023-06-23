import { Component,OnInit } from '@angular/core';
import { Album } from 'src/album';
import { AlbumService } from '../services/album.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
    album : Album= new Album();
    aid : number=0;

    constructor(private service: AlbumService) {}

    ngOnInit(): void{

    }

    findAlbum(){
      var temp=this.service.findById(this.aid);
      if(temp!=null)
      this.album=temp;

    }
}
