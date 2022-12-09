import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  missionName: string = "Mars 2020";
  rocketName:string = "Plasma Max";
  constructor() { }

  ngOnInit(): void {
  }

}
