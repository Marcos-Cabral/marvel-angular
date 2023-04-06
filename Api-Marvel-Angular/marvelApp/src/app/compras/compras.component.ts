import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompraServiceService } from './compra-service/compra-service.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  allCompras:Observable<any>;

  constructor(private compraService:CompraServiceService) { }

  ngOnInit() {
    this.getCompras();
  }

  getCompras(){
    this.allCompras=this.compraService.getCompras();
  }
  

}
