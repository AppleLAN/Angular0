import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-componente-superior',
  templateUrl: './componente-superior.component.html',
  styleUrls: ['./componente-superior.component.scss']
})
export class ComponenteSuperiorComponent implements OnInit {
  @Input() informacionDelUsuario = {
    edad: 26,
    nombre: 'Alan'
  };

  @Output() informacionDelUsuarioChange = new EventEmitter();
  imAProperty = 'Hola soy una propiedad';

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.imAProperty = 'Hola soy una propiedad modificada y mejorada';
    }, 5000);

    this.informacionDelUsuario.edad = 20;
    this.informacionDelUsuarioChange.emit(this.informacionDelUsuario);
  }
}
