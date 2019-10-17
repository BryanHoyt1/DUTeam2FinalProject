//const newHireRouter = require('../routes/newHireRouter');
const axios = require('axios');
//const newEmp = require('../models/newHire');

//const url = 'https://pokeapi.co/api/v2/pokemon';


const getNewHires = (url) => {
    //console.log('request received by controller')
    return axios.get(url);
};

const getNewHireById = (url, id) => {
    //console.log('request received by controller');
    return axios.get(`${url}/${id}`);
}

const createNewHire = (url, newHire) => {
    return axios.post(url, newHire);
}

const updateNewHire = (url, id, newHire) => {
    return axios.put(`${url}/${id}`, newHire);
}

module.exports = {getNewHires:getNewHires, getNewHireById:getNewHireById,
    createNewHire: createNewHire, updateNewHire: updateNewHire};