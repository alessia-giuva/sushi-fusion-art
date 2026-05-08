import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
vaiAllaLegenda() {
  const elemento = document.getElementById('legenda-allergeni');
  if (elemento) {
   
    const y = elemento.getBoundingClientRect().top + window.pageYOffset - 100;

    window.scroll(0, y);
  }
}
}
