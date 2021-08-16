import { Component, OnInit } from '@angular/core';
//import { GuiButtonComponent } from '../gui-button/gui-button.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  hero = 'Windstorm';
  constructor() {}

  ngOnInit() {}
}
