import {Component,OnInit} from '@angular/core';
import {CommonServicesService } from 'src/app/common-services.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Testtable } from '../models/reports-table';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit{
  dataSource = new MatTableDataSource<Testtable>();
    displayedColumns : string[] = ['title', 'author', 'description','publish','action'];
 
    constructor(private commonServicesService:CommonServicesService,public dialog:MatDialog){}

  ngOnInit():void {
    this.getAll();
   
  }
  getAll() {
    this.commonServicesService.getAll().subscribe((response: Testtable[]) => {
      this.dataSource.data = response;
    });
  }
  
  delete(id: number) {
    // Call the API to delete the row with the specified ID
    this.commonServicesService.delete(id).subscribe(
      data => {
        console.log(data);
        this.getAll();
      },
      error => {
        console.log(error);
      }
    );
  }
  



  openUpdateModal(id: number, data: any) {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '500px',
      data: { id, data }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.commonServicesService.update(result).subscribe(() => {
          // update data in the table's dataSource
        });
    }});

      
  // delete(id: number): void {
  //   const itemToDelete = this.dataSource.data[id];
  //   this.commonServicesService.delete(itemToDelete).subscribe(() => {
  //     // remove the deleted item from the data source
  //     const index = this.dataSource.data.indexOf(itemToDelete);
  //     if (index > -1) {
  //       this.dataSource.data.splice(index, 1);
  //       this.dataSource._updateChangeSubscription();
  //     }
  //   }, (error) => {
  //     console.error('Failed to delete item', error);
  //   });
  // }
  
  
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
