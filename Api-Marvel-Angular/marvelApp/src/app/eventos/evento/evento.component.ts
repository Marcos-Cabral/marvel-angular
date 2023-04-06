import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
  @Input()evento:any;
  
  constructor() { }

  ngOnInit() {
  }

}
