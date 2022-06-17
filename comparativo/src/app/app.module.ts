import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuemsouComponent } from './components/quemsou/quemsou.component';
import { BrasilComponent } from './components/brasil/brasil.component';
import { PortugalComponent } from './components/portugal/portugal.component';
import { ContatosComponent } from './components/contatos/contatos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    QuemsouComponent,
    BrasilComponent,
    PortugalComponent,
    ContatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
