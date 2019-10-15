const newHireRouter = require('../routes/newHireRouter');
const axios = require('axios');

//const url = 'https://pokeapi.co/api/v2/pokemon';


const getNewHires = async url => {
    try {
        const response = await axios.get(url);
        const data = response.data;
        
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    
};

const getNewHireById = async (url, id) => {
    try {
        const response = await axios.get(`${url}/${id}`);
        const data = response.data;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

module.exports = getNewHires, getNewHireById;