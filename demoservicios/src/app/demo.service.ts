import { Injectable } from '@angular/core';

@Injectable()
export class DemoService{

 dameNumero():number{
    return Math.random();

  }

  dameTexto():string{
return "Soy un texto devuelto por el Api service"

  }
}
