import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from 'src/album';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  album:Album=new Album();
  genres:string[]=["Rock","Jazz","Pop","HipHop"]
  constructor(private service : AlbumService, private route:Router){}
  ngOnInit(): void{}
  saveAlbum(){
      this.service.addAlbum(this.album)
  }

}