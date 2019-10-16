//const newHireRouter = require('../routes/newHireRouter');
const axios = require('axios');

//const url = 'https://pokeapi.co/api/v2/pokemon';


const getNewHires = (url) => {
    //console.log('request received by controller')
    return axios.get(url);
};

const getNewHireById = (url, id) => {
    console.log('request received by controller');
    return axios.get(`${url}/${id}`);
}

module.exports = {getNewHires:getNewHires, getNewHireById:getNewHireById};