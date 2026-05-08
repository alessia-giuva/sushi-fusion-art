import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { Menu } from './components/menu/menu';
import { ChiSiamo } from './components/chi-siamo/chi-siamo';
import { Contatti } from './components/contatti/contatti';
import { Footer } from './components/footer/footer';

@NgModule({
  declarations: [
    App,
    Navbar,
    Home,
    Menu,
    ChiSiamo,
    Contatti,
    Footer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
