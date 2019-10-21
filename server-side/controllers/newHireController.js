const axios = require('axios');

const url = 'http://127.0.0.1:5000';


const getNewHires = () => {
    return axios.get(`${url}/newhiretable`);
};

const getNewHireById = (id) => {
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

const deleteNewHire = (id) => {
    return axios.delete(`${url}/${id}`);
}

module.exports = {getNewHires:getNewHires, getNewHireById:getNewHireById,
    createNewHire: createNewHire, updateNewHire: updateNewHire, patchNewHire: patchNewHire,
    deleteNewHire: deleteNewHire};