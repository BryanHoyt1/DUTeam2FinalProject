const axios = require('axios');
const url = 'http://127.0.0.1:5000';

 const getBadges = () => {
    //TODO: do we need a method to get all badges?
} 

const getBadgeByID = (id) => {
    return axios.get(`${url}/badgeinfo/${id}`);
}

const createBadge = (newBadge) => {
    return axios.post(`${url}/accessbadge`, newBadge);
}

 const updateBadge = (id, badgeUpdate) => {
    //return axios.put(`${url}/${id}`, badgeUpdate);
} 

module.exports = { getBadges: getBadges, getBadgeByID: getBadgeByID, createBadge: createBadge, updateBadge: updateBadge}