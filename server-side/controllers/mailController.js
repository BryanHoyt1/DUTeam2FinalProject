const axios = require('axios');

const url = 'http://127.0.0.1:5000/mail';

const sendMailToNewEmp = (id) => {
    return axios.get(`${url}/${id}`);
}

module.exports = {sendMailToNewEmp: sendMailToNewEmp};