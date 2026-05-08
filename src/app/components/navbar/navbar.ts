import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  isMenuCollapsed = true;


  closeMenu() {
    this.isMenuCollapsed = true;
  }
}