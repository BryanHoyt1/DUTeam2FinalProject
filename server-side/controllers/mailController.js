const axios = require('axios');

const url = 'http://127.0.0.1:5000/mail';

const sendMailToNewEmp = (mail) => {
    return axios.get(url, mail);
}

module.exports = {sendMailToNewEmp: sendMailToNewEmp};