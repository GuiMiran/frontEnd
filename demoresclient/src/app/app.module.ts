//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

//componentes
import { AppComponent } from './app.component';
import { CamareroListComponent } from './componentes/camarero-list/camarero-list.component';

//services
import {CamareroServiceService} from './services/camarero-service.service';
import { ProductoListComponent } from './componentes/producto-list/producto-list.component';
import { ProductoServiceService } from './service/producto-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CamareroListComponent,
    ProductoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CamareroServiceService, ProductoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
