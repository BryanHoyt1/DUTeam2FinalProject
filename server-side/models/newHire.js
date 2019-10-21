class NewHire {
//newHireId is the primary key for 
//TODO: figure out how to handle status (1 of 8, 4 of 8, etc)

    constructor(employeeID, lastname, firstname, empNum, persemail, phone, birthdate, LOS_title, status, recruiter, startdate) {
        
        this.employeeID = employeeID;
        this.lastname = lastname;
        this.firstname = firstname;
        this.empNum = empNum;
        this.persemail = persemail;
        this.phone = phone;
        this.birthdate = birthdate;
        this.LOS_title = LOS_title;
        //change/delete status property?
        this.status = status;
        this.recruiter = recruiter;
        this.startdate = startdate;
    }
}

 module.exports = NewHire;