const axios = require('axios');

const url = 'http://127.0.0.1:5000/mail';

const sendMailToNewEmp = (emp) => {
    return axios.get(url, emp);
}

module.exports = {sendMailToNewEmp: sendMailToNewEmp};