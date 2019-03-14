import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent implements OnInit {
  @Input() userInformation;
  showExample = false;
  partnerInformation;
  userCars = [
    {
      nombre: 'up',
      velocidadMaxima: 150
    },
    {
      nombre: 'BMW',
      velocidadMaxima: 230
    },
    {
      nombre: 'Hilux',
      velocidadMaxima: 200
    },
    {
      nombre: 'Ferrari',
      velocidadMaxima: 310
    }
  ];

  constructor() { }

  ngOnInit() {
    this.userInformation = {
      ...this.userInformation,
      altura: 1.69
    };
  }

  showValue() {
    setTimeout(() => {
      this.showExample = !this.showExample;
    }, 1000);
  }

}
