const axios = require('axios');

const url = 'http://127.0.0.1:5000';

const externalLogin = (credentials) => {
    return axios.post(`${url}/extlogin`, credentials);
}

module.exports = {externalLogin: externalLogin};