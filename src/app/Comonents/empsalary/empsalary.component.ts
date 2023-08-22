import { EmployeeService } from 'src/app/Services/employee.service';
import { SalaryReportService } from './../../Services/salary-report.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empsalary',
  templateUrl: './empsalary.component.html',
  styleUrls: ['./empsalary.component.css']
})
export class EmpsalaryComponent implements OnInit{
  AllEmployees:any;
  searchTerm: string="";
  salaryReport:any;
  name:string="";
  Fromdate:Date=new Date();
  Todate:Date=new Date();

  showSuggestions() {
       
    console.log(this.searchTerm);
    this.employeeService.getEmployeeByname(this.searchTerm)
      .subscribe(data => {
        this.AllEmployees=data;
      });
      console.log(this.AllEmployees);
       console.log(this.AllEmployees.length);
      // console.log(this.Employees);
  }

constructor( private employeeService:EmployeeService)
{
}

GetReport()
{
  // console.log(this.name);
  // this.salaryReport=this.salaryReportService.getReportByDate(this.name,this.Fromdate,this.Todate).subscribe({
  //   next:(Response)=>{
  //     this.salaryReport=Response;
  //   }
  // })  
}

ngOnInit(): void {
  this.AllEmployees=this.employeeService.getAllEmployee().subscribe({
    next:(response)=>{
      this.AllEmployees=response;
      
    },
    error:(myError)=>{}
  })
}
      // console.log(this.Employees);
}
