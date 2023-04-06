import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './characters/character/character.component';
import { CharactersComponent } from './characters/characters.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { ComicsComponent } from './comics/comics.component';
import { EventosComponent } from './eventos/eventos.component';
import { ComicComponent } from './comics/comic/comic.component';
import { EventoComponent } from './eventos/evento/evento.component';
import { ComprasComponent } from './compras/compras.component';
import { CompraComponent } from './compras/compra/compra.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharactersComponent,
    NavbarComponent,
    ComicsComponent,
    EventosComponent,
    ComicComponent,
    EventoComponent,
    ComprasComponent,
    CompraComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
