class NewHire {
//newHireId is the primary key for 
//TODO: figure out how to handle status (1 of 8, 4 of 8, etc)
//TODO: add badge form fields?
    constructor(newHireId, lastname, firstname, empNum, persemail, phone, birthdate, LOS_title, status, recruiter, startdate) {
        
        this.newHireId = newHireId;
        this.lastname = lastname;
        this.firstname = firstname;
        this.empNum = empNum;
        this.persemail = persemail;
        this.phone = phone;
        this.birthdate = birthdate;
        this.LOS_title = LOS_title;
        this.status = status;

        //TODO: do los and recruiter need enums?
        this.recruiter = recruiter;
        this.startdate = startdate;
    }
}

 module.exports = NewHire;