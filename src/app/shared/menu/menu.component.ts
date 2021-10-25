import { Component } from '@angular/core';

interface MenuItem {
  ruta: string;
  nombre: string; 
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class MenuComponent {

  menuItems: MenuItem[] = [
    {
      ruta: 'mapas/full-screen',
      nombre: 'Fullscreen'
    },
    {
      ruta: 'mapas/zoom-range',
      nombre: 'Zoomrange'
    },
    {
      ruta: 'mapas/propiedades',
      nombre: 'Propiedades'
    },
    {
      ruta: 'mapas/marcadores',
      nombre: 'Marcadores'
    }
  ]
}
