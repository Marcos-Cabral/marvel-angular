import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { EventosComponent } from './eventos/eventos.component';
import { ComprasComponent } from './compras/compras.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
    path:'',redirectTo:'/characters', pathMatch:'full'
  },
  {
    path:'characters',component: CharactersComponent
  },{
    path:'comics', component: ComicsComponent
  },
  {
    path:'events', component: EventosComponent
  },
  {
    path:'buy', component:ComprasComponent
  },
  {
    path:'about', component:AboutComponent
  }
  ,{
    path:'**', component:CharactersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
