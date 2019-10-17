//const newHireRouter = require('../routes/newHireRouter');
const axios = require('axios');
//const newEmp = require('../models/newHire');

const url = 'http://127.0.0.1:5000';


const getNewHires = () => {
    //console.log('request received by controller')
    return axios.get(`${url}/newhiretable`);
};

const getNewHireById = (id) => {
    //console.log('request received by controller');
    return axios.get(`${url}/details/${id}`);
}

const createNewHire = (newHire) => {
    return axios.post(url, newHire);
}

const updateNewHire = (id, newHire) => {
    return axios.put(`${url}/${id}`, newHire);
}

const patchNewHire = (id, newHire) => {
    return axios.patch(`${url}/${id}`, newHire);
}

module.exports = {getNewHires:getNewHires, getNewHireById:getNewHireById,
    createNewHire: createNewHire, updateNewHire: updateNewHire, patchNewHire: patchNewHire};