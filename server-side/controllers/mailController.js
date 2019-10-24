const axios = require('axios');

const url = 'http://127.0.0.1:5000/mail';

const sendMailToNewEmp = (newHire) => {
    return axios.get(url, newHire);
}

module.exports = {sendMailToNewEmp: sendMailToNewEmp};