import { Component, OnInit } from '@angular/core';
import {ComicServiceService } from './comics-service/comic-service.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  allComics:Observable<any>;

  constructor(private comicService:ComicServiceService) { }

  ngOnInit() {
    this.getComics();
  }

  getComics(){
    this.allComics=this.comicService.getComics();
  }

}
