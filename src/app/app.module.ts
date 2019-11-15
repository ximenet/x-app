import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { Cont2Component } from './components/cont2/cont2.component';
import { Cont1Component } from './components/cont1/cont1.component';
import { HeaderComponent } from './components/header/header.component';
import { PruebaService } from './services/prueba.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    Cont2Component,
    Cont1Component,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PruebaService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
