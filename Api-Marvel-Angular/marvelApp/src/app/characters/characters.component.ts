import { Component, OnInit } from '@angular/core';
import {CharactersApiService} from './character/character-service/characters-api.service';
import {Observable} from 'rxjs'; 

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  allCharacters: Observable<any>;

  constructor(private characterService: CharactersApiService) {}

  ngOnInit() {
    this.getCharacters();
  }
  getCharacters(){
    this.allCharacters=this.characterService.getAllCharacters();
  }
}
