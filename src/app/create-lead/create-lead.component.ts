import { Component,OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { CommonServicesService } from '../common-services.service';
import { Testtable } from '../models/reports-table';


interface currency {
  value: string;
  viewValue: string;
}
interface servicetype{
  value: string;
  viewValue: string;
}

interface status{
  value: string;
  viewValue: string;
}
interface source{
  value: string;
  viewValue: string;
}
interface Prerequisite{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-lead',
  templateUrl: './create-lead.component.html',
  styleUrls: ['./create-lead.component.css']
})
export class CreateLeadComponent implements OnInit {
  testtable:Testtable ={
    title:'',
    description:'',
    publish:false,
    author:''
  };
  submitted=false;
  constructor(private commonServicesService:CommonServicesService) {};
  ngOnInit(): void {
    
  }
  savetestingtable():void{
    const data={
      title:this.testtable.title,
      description:this.testtable.description,
      author:this.testtable.author,
      publish:this.testtable.publish
    };
    this.commonServicesService.create(data).subscribe({
      next:(res)=>{
        res.send(data);
        console.log(res);
        this.submitted=true;
        alert('Lead created successfully!');
      },
      error:(e)=>console.error(e)
    });
  }

  newtestingtable():void{
    this.submitted=false;
    this.testtable={
      title:'',
      description:'',
      author:'',
      publish:false
    };
  }
  toppings = new FormControl('');
  toppingList: string[] = ['Certified Automation Engineering', 'Diplamo in Automation Engineering', 'Siemens Automation Training', 'Specialization Training',  'ABB 800x DCS','EMERSON DeltaV DCS','EMERSON DeltaV DCS & S88-BATCH','EMERSON DeltaV DCS & SIS','Honeywell EPKS C300 DCS','SIEMENS PCS7 DCS','Master Diploma in Process Control Engineering'];

  foods: currency[] = [
    {value: 'inr', viewValue: 'INR'},
    {value: 'usd', viewValue: 'USD'},
   
  ];

  servicetypes: servicetype[] = [
    {value: 'vilt', viewValue: 'VILT'},
    {value: 'cilt', viewValue: 'CILT'},
   
  ];

  statuss: status[] = [
    {value: 'working', viewValue: 'Working'},
    {value: 'student', viewValue: 'Student'},
    {value: 'seekingjob', viewValue: 'Seeking for job'},
    {value: 'others', viewValue: 'others'},
   
  ];
sources: source[] = [
    {value: 'working', viewValue: 'Website-Excel'},
    {value: 'student', viewValue: 'Website-Infercon'},
    {value: 'seekingjob', viewValue: 'Linkedin'},
    {value: 'others', viewValue: 'Twitter'},
    {value: 'others', viewValue: 'Indiamart'},
    {value: 'others', viewValue: 'Directcall'},
    {value: 'others', viewValue: 'Just Dial'},
    {value: 'others', viewValue: 'Google '},
    {value: 'others', viewValue: 'Facebook '},
    {value: 'others', viewValue: 'Internal Reference'},
    {value: 'others', viewValue: 'External Reference'},
   
  ];

  Prerequisites: Prerequisite[] = [
    {value: 'yes', viewValue: 'Yes'},
    {value: 'no', viewValue: 'No'},
   
  ];

}
