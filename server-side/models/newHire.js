class NewHire {
//newHireId is the primary key for 
//TODO: figure out how to handle status (1 of 8, 4 of 8, etc)
//TODO: add badge form fields?
    constructor(newHireId, lastName, firstName, empNum, email, phone, birthdate, los, recruiter, startDate) {
        
        this.newHireId = newHireId;  //is this property necessary?
        this.lastName = lastName;
        this.firstName = firstName;
        this.empNum = empNum;
        this.email = email;
        this.phone = phone;
        this.birthdate = birthdate;
        this.status = status;

        //TODO: do los and recruiter need enums?
        this.los = los;
        this.recruiter = recruiter;
        this.startDate = startDate;
    }
}

 module.exports = NewHire;