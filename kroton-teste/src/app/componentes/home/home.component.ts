import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imgPath = './../../../assets/img/img3.svg';

  cardList = [
    {
      cardText: 'Texto do Card 1',
      cardTitle: 'Título do Card 1',
    },
    {
      cardText: 'Texto do Card 2',
      cardTitle: 'Título do Card 2',
    },
    {
      cardText: 'Texto do Card 3',
      cardTitle: 'Título do Card 3',
    },
    {
      cardText: 'Texto do Card 4',
      cardTitle: 'Título do Card 4',
    },
    {
      cardText: 'Texto do Card 5',
      cardTitle: 'Título do Card 5',
    },
    {
      cardText: 'Texto do Card 6',
      cardTitle: 'Título do Card 6',
    },
    {
      cardText: 'Texto do Card 7',
      cardTitle: 'Título do Card 7',
    },
    {
      cardText: 'Texto do Card 8',
      cardTitle: 'Título do Card 8',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
