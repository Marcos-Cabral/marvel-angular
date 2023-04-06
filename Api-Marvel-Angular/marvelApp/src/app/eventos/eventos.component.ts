import { Component, OnInit } from '@angular/core';
import { EventsServiceService } from './events-service/events-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  allEvents:Observable<any>;

  constructor(private eventService:EventsServiceService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(){
    this.allEvents=this.eventService.getEvents();
  }

}
