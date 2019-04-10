import { Component, OnInit } from '@angular/core';
import { CamareroServiceService } from 'src/app/services/camarero-service.service';


@Component({
  selector: 'app-camarero-list',
  templateUrl: './camarero-list.component.html',
  styleUrls: ['./camarero-list.component.css']
})
export class CamareroListComponent implements OnInit {
camareros;
  constructor(private camareroService:CamareroServiceService) { }

  ngOnInit() {
    this.read();
  }


  read():void{

    this.camareroService.getAll().subscribe(datos=>{
      this.camareros=datos;
    })
  }
}
