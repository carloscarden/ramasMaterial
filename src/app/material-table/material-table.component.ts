import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}





class PeriodicElement2 {
  // list the propeties here, ONLY WRITTEN ONCE
  id = '';
  title = '';
}

// This is the pure interface version, to be used/exported
interface IMyTable extends PeriodicElement2 { }

// Props type as an array, to be exported
type MyTablePropsArray = Array<keyof IMyTable>;



const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];


const ELEMENT_DATA2: PeriodicElement2[] = [
  { id: '1', title: 'Hydrogen' },
  { id: '2', title: 'Helium'},
  { id: '3', title: 'Lithium'},
];






@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent implements OnInit {
  displayedColumns: string[];
  dataSource;


  constructor() { }

  ngOnInit() {
    const propsArray: MyTablePropsArray =
      Object.keys(new PeriodicElement2()) as MyTablePropsArray;
    console.log(propsArray); // prints out  ["id", "title", "isDeleted"]

    this.displayedColumns = propsArray;
    this.dataSource = ELEMENT_DATA2;


  }

}
