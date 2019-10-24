const axios = require('axios');
const url = 'http://127.0.0.1:5000';

const getBadges = () => {
    //TODO: do we need a method to get all badges?
}

const getBadgeByID = (id) => {
    //TODO: what id is needed to get one badge? employee or form?
    return axios.get(`${url}/${id}`);
}

const createBadge = (newBadge) => {
    //TODO: use template string with url to route to correct data path
    return axios.post(`${url}/accessbadge`, newBadge);
}

const updateBadge = (id, badgeUpdate) => {
    return axios.put(`${url}/${id}`, badgeUpdate);
}

module.exports = { getBadges: getBadges, getBadgeByID: getBadgeByID, createBadge: createBadge, updateBadge: updateBadge}