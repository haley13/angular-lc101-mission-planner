import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ownerName: string = "Junie Bomba Allick";
  missionName: string = "Stunning pink conch shell artwork";

  constructor() { }

  ngOnInit(): void {
  }

}
