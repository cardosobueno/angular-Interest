import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jurossimples',
  templateUrl: './jurossimples.component.html',
  styleUrls: ['./jurossimples.component.css'],
})
export class JurossimplesComponent implements OnInit {
  taxa: number = 12;
  mes: number = 5;
  valor: number = 600;
  result: number = 0;

  constructor() {}

  calcula() {
    this.result = this.valor * (this.taxa / 100) * this.mes;

    console.log(this.result);
    console.log(this.result + this.valor);
  }

  ngOnInit() {}
}
