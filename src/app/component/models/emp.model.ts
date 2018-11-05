export class Employee
{

    id : string;
    firstName : string;
    lastName : string;
    genderId: string;
    age: number;
    phone: string;
    email: string;
    departmentId : string;
    countryId : string;
    stateId : string;
    countryName : string;
    stateName : string;
    gender : string;
    deptName : string;

    
    
    constructor(id : string, firstName: string, lastName : string, genderId: string, age:number, phone: string, email : string,
        departmentId : string, countryId: string, stateId: string, countryName: string, stateName: string, gender: string, deptName: string){
            this.id=id
            this.firstName=firstName;
            this.lastName=lastName;
            this.genderId=genderId;
            this.age=age;
            this.phone=phone;
            this.email=email;
            this.departmentId=departmentId;
            this.countryId=countryId;
            this.stateId = stateId;
            this.countryName = countryName;
            this.stateName = stateName;
            this.gender = gender;
            this.deptName = deptName;
        }
}