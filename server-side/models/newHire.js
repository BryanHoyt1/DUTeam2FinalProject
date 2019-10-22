class NewHire {
//newHireId is the primary key for 
//TODO: figure out how to handle status (1 of 8, 4 of 8, etc)
//TODO: add badge form fields?
    constructor(newHireId, lastname, firstname, empNum, personal_email, phone, birthdate, los_title, status, recruiter, startdate) {
        
        this.employeeID = employeeID;
        this.lastname = lastname;
        this.firstname = firstname;
        this.empNum = empNum;
        this.personal_email = personal_email;
        this.phone = phone;
        this.birthdate = birthdate;
        this.los_title = los_title;
        this.status = status;
        this.recruiter = recruiter;
        this.startdate = startdate;
    }
}

 module.exports = NewHire;