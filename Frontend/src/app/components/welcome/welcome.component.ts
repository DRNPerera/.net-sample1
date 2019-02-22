import { Component, OnInit } from '@angular/core';
import { Welcome } from '../../Models/welcome.models';
import { WelcomeService } from "../../services/welcome.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [WelcomeService]
})
export class WelcomeComponent implements OnInit {
  id: number;
  code: string;
  name: string;

  welcomex: Welcome[];

  constructor(public welcomeService: WelcomeService) { }
  ngOnInit() {

    this.getWelcome();

  }

  getWelcome() {
    this.welcomeService.getAllWelcomes().subscribe(welcomes => {
      this.welcomex = welcomes;
    })
    // console.log(this.welcomex);
  }

  dele(Idx) {
    console.log(Idx);
  }

  more(x) {
    this.id = x.Id;
    this.code = x.Code;
    this.name = x.Name;
  }



}

