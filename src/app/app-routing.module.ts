import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ArtistComponent } from './artist/artist.component';
import { GenreComponent } from './genre/genre.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { TitleComponent } from './title/title.component';

const routes: Routes = [
  {path:'add',component:AddComponent},
  {path:'list',component:ListComponent},
  {path:'search',component:SearchComponent},
  {path:'title',component:TitleComponent},
  {path:'artist',component:ArtistComponent},
  {path:'genre',component:GenreComponent},
  {path:'**',redirectTo:'/list',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }