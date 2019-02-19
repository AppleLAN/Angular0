import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular0';
  informacionDelUsuario = {
    edad: 26,
    nombre: 'Alan'
  };
  informacionDelUsuario2 = {
    edad: 22,
    nombre: 'Ricardo'
  };
}
