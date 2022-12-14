import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroesModule } from './Heroes/heroes.module';
import { ContadoresModule } from './Contadores/contadores.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
