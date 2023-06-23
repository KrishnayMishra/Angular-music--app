import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from 'src/album';
@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private static baseUri:string="http://localhost:8880"
 // albums : Album[]=[];

  constructor(private http : HttpClient) { 
    //this.http.get<Album[]>('../assests/albums.json').subscribe(data=>this.albums=data);
  }
  
  addAlbum(a : Album){
   // this.albums.push(a);
   this.http.post(AlbumService.baseUri + "/album", a).subscribe(data => data=a);
  

  }
  getAll(){
    //return this.albums;
    return this.http.get<Album[]>(AlbumService.baseUri + "/albums");
  }

  findById(id:number){
    //return this.albums.find(a=>a.id==id);
  }

  delAlbum(idx:number){
   // return this.albums.splice(idx,1);
  }

  findByTitle(title:string)
  {
  //  return this.albums.find(a=>a.title==title);
  }

  findByArtist(artist:string)
  {
     // return this.albums.filter(a=>a.artist==artist);
  }

  findByGenre(genre:string)
  {
    //  return this.albums.filter(a=>genre==genre);
  }
}