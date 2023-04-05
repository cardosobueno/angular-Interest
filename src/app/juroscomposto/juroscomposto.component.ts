import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juroscomposto',
  templateUrl: './juroscomposto.component.html',
  styleUrls: ['./juroscomposto.component.css'],
})
export class JuroscompostoComponent implements OnInit {
  taxa: number = 12;
  mes: number = 5;
  valor: number = 600;
  result: number = 0;

  calcula() {
    // this.result = this.valor * (this.taxa / 100) * this.mes;
    this.result = this.valor * (1 + this.taxa / 100) * this.mes;

    console.log(this.result);
    console.log(this.result + this.valor);
  }
  constructor() {}

  ngOnInit() {}
}
