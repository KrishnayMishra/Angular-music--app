import { Component,OnInit } from '@angular/core';
import { Album } from 'src/album';
import { AlbumService } from '../services/album.service';


@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit{
    album : Album= new Album();
    //atitle : string='';

    constructor(private service: AlbumService) {}

    ngOnInit(): void{

    }

    findBytitle(){
      var temp=this.service.findByTitle(this.album.title);
      if(temp!=null)
      this.album=temp;

    }
}
