class NewHire {
//newHireId is the primary key for 
//TODO: figure out how to handle status (1 of 8, 4 of 8, etc)

    constructor(employee_id, lastname, firstname, employee_num, personal_email, phone, birthdate, los_title, recruiter, startdate) {
        
        this.employee_id = employee_id;
        this.lastname = lastname;
        this.firstname = firstname;
        this.employee_num = employee_num;
        this.personal_email = personal_email;
        this.phone = phone;
        this.birthdate = birthdate;
        this.los_title = los_title;
        //this.status = status;
        this.recruiter = recruiter;
        this.startdate = startdate;
    }
}

 module.exports = NewHire;