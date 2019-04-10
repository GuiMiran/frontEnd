import { Component, OnInit } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  numero:number;
  texto:string;

  constructor(private demoService:DemoService){}// el servicio ya esta inyectado

  ngOnInit(): void {
   this.numero = this.demoService.dameNumero();
   this.texto = this.demoService.dameTexto();
    // throw new Error("Method not implemented.");
  }

}
