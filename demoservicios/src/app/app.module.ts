//Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//componene
import { AppComponent } from './app.component';


//service
import { DemoService} from './demo.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
