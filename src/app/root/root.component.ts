import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
})
export class RootComponent {
  @Input()
  option = '0';

  constructor() {}

  ngOnInit() {}
}
