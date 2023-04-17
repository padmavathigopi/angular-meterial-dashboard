//dialog-box.component.ts
import { Component, Inject, Optional, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})

export class DialogBoxComponent implements OnInit{
local_data:any;
action:string;
  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { this.local_data = {...data.data};
  this.action = data.action;}

  ngOnInit() {
    // Initialize the form with the existing data
  }

  updateData() {
    // Update the data using the service and close the modal
    this.dialogRef.close();
  }
 
}
