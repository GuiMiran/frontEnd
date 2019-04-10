import { Component, OnInit } from '@angular/core';
import { ProductoServiceService } from 'src/app/service/producto-service.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {
productos;
  constructor(private productoService:ProductoServiceService) { }

  ngOnInit() {
    this.read();
  }
  read():void{

    this.productoService.getAll().subscribe(datos=>{
      this.productos=datos;
    })
  }
}
