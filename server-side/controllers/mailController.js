const axios = require('axios');

const url = 'http://127.0.0.1:5000/mail';

const sendMailToNewEmp = (mail) => {
     /* let params = new URLSearchParams();
    params.append("firstname", mail.firstname);
    params.append("recruiter", mail.recruiter);
    params.append("personal_email", mail.personal_email);

    let request = {
        params: params
    }; */

    //return axios.get(`${url}/mail/?firstname=${newHire.firstname}&recruiter=${newHire.recruiter}&personal_email=${newHire.personal_email}`);
    // return axios.get(`${url}?firstname=${newHire.firstname}&recruiter=${newHire.recruiter}&personal_email=${newHire.personal_email}`);
    return axios({
        method: "get",
        url: url,
        params: {
            firstname: this.mail.firstname,
            recruiter: this.mail.recruiter,
            personal_email: this.mail.personal_email
        }
    });
}

module.exports = {sendMailToNewEmp: sendMailToNewEmp};