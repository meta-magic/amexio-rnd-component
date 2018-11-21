import { Component, ViewChild } from '@angular/core';
import { Employee } from './component/models/emp.model';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  empid = "2";
  @ViewChild(NgForm) public form: NgForm;
  //empid:string;
  empdata : Employee [];
  empname : string;
  selectedItems: any [];

  employee: EmployeeModel;
  constructor(){
    this.empdata = [{"id":"1","firstName":"Araf","lastName":"Karsh","genderId":"1","age":35,"phone":"0987654321","email":"abcd@abc.com","departmentId":"1","countryId":"356","stateId":"3","countryName":"India","stateName":"Kerala","gender":"Male","deptName":"Admin"},{"id":"2","firstName":"Ketan","lastName":"Gote","genderId":"1","age":35,"phone":"0987654321","email":"abcd@abc.com","departmentId":"2","countryId":"356","stateId":"1","countryName":"India","stateName":"Maharastra","gender":"Male","deptName":"HR"},{"id":"3","firstName":"Akhtar","lastName":"Jadhav","genderId":"1","age":25,"phone":"0987654321","email":"abcd@abc.com","departmentId":"3","countryId":"356","stateId":"6","countryName":"India","stateName":"Rajasthan","gender":"Male","deptName":"Finance"},{"id":"4","firstName":"Dattaram","lastName":"Gawas","genderId":"1","age":25,"phone":"0987654321","email":"abcd@abc.com","departmentId":"1","countryId":"356","stateId":"1","countryName":"India","stateName":"Maharastra","gender":"Male","deptName":"Admin"},{"id":"5","firstName":"Rashmi","lastName":"Thakkar","genderId":"2","age":25,"phone":"0987654321","email":"abcd@abc.com","departmentId":"3","countryId":"356","stateId":"4","countryName":"India","stateName":"Gujrat","gender":"Female","deptName":"Finance"},{"id":"6","firstName":"Deepali","lastName":"Arvind","genderId":"2","age":25,"phone":"0987654321","email":"abcd@abc.com","departmentId":"2","countryId":"356","stateId":"1","countryName":"India","stateName":"Maharastra","gender":"Female","deptName":"HR"},{"id":"7","firstName":"Ashwini","lastName":"Arge","genderId":"2","age":25,"phone":"0987654321","email":"abcd@abc.com","departmentId":"1","countryId":"356","stateId":"1","countryName":"India","stateName":"Maharastra","gender":"Female","deptName":"Admin"},{"id":"8","firstName":"Manisha","lastName":"Boddu","genderId":"2","age":25,"phone":"0987654321","email":"abcd@abc.com","departmentId":"3","countryId":"356","stateId":"5","countryName":"India","stateName":"Tamil Nadu","gender":"Female","deptName":"Finance"},{"id":"9","firstName":"Ankita","lastName":"Jain","genderId":"2","age":25,"phone":"0987654321","email":"abcd@abc.com","departmentId":"3","countryId":"356","stateId":"1","countryName":"India","stateName":"Maharastra","gender":"Female","deptName":"Finance"},{"id":"10","firstName":"Kedar","lastName":"Kokil","genderId":"2","age":25,"phone":"0987654321","email":"abcd@abc.com","departmentId":"2","countryId":"356","stateId":"1","countryName":"India","stateName":"Maharastra","gender":"Female","deptName":"HR"}];
    this.employee = new EmployeeModel();
  }

  addNewRecord(event:any){
    this.empdata.push(new Employee(new Date().getTime()+"","New Record "+new Date().getTime(),"Karsh","1",35,"0987654321","abcd@abc.com","1","356","3","India","Kerala","Male","Admin"));
  }

  ngAfterViewChecked() {
  }
}


class EmployeeModel {
  firstname: string;
  lastname: string;
}