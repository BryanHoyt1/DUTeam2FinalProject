//const newHireRouter = require('../routes/newHireRouter');
const axios = require('axios');
//const newEmp = require('../models/newHire');

const url = 'https://pokeapi.co/api/v2/pokemon';


const getNewHires = () => {
    //console.log('request received by controller')
    return axios.get(url);
};

const getNewHireById = (id) => {
    //console.log('request received by controller');
    return axios.get(`${url}/${id}`);
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