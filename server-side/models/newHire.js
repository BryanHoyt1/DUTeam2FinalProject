class newHire {

    /* empId : number;
    lastName : string;
    firstName : string;
    email : string;
    phone : string; //number?
    dateOfBirth : Date;
    complete : boolean; */

    constructor(lastName, firstName, email, phone, dateOfBirth, status) {
        //this.empId = empId;
        this.lastName = lastName;
        this.firstName = firstName;
        this.email = email;
        this.phone = phone;
        this.dateOfBirth = dateOfBirth;
        this.status = status;
    }
}

 module.exports = newHire;