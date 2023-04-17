import {Component,OnInit} from '@angular/core';
import {CommonServicesService } from 'src/app/common-services.service';
import { MatTableDataSource } from '@angular/material/table';

import { Testtable } from '../models/reports-table';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit{
  dataSource = new MatTableDataSource<Testtable>();
    displayedColumns : string[] = ['title', 'author', 'description','publish','action'];
 
    constructor(private commonServicesService:CommonServicesService){}

  ngOnInit():void {
    this.getAll();
  }
  getAll() {
    this.commonServicesService.getAll().subscribe((response: Testtable[]) => {
      this.dataSource.data = response;
    });
  }
}

  //displayedColumns: string[] = ['title', 'description', 'author', 'publish'];
  
  //dataSource = new MatTableDataSource<Data>(ELEMENT_DATA);

  //constructor(private service : CommonServicesService){
   
  
//}
// export interface Data {
//   title: string;
//   description: string;
//   author: string;
//   publish: boolean;
// }

// const ELEMENT_DATA: Testtable[] = [
//   {
//    title:'myproject',
//    description:'my project testing',
//    author:'test',
//    publish:true

//   }
// ];
