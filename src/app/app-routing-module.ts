import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './components/home/home';
import { Menu } from './components/menu/menu';
import { ChiSiamo } from './components/chi-siamo/chi-siamo';
import { Contatti } from './components/contatti/contatti';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'menu', component: Menu },
  { path: 'chi-siamo', component: ChiSiamo },
  { path: 'contatti', component: Contatti }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { 
      scrollPositionRestoration: 'enabled' 
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
