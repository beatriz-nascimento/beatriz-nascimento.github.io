import { Component } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  title: string;
  description: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'my-portfolio';



  tiles: Tile[] = [
    {title:'Title from experience', description: 'Experience description 1', cols: 2, rows: 1, color: 'lightblue'},
    {title:'Title from experience', description: 'Experience description 1', cols: 2, rows: 2, color: 'lightgreen'},
    {title:'Title from experience', description: 'Experience description 1', cols: 2, rows: 1, color: 'lightpink'},
    {title:'Title from experience', description: 'Experience description 1', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}
