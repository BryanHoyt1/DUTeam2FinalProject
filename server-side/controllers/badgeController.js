const axios = require('axios');
const url = 'http://127.0.0.1:5000';

const getBadges = () => {
    //TODO: do we need a method to get all badges?
}

const getBadgeByID = (id) => {
    //TODO: what id is needed to get one badge? employee or form?
}

const createBadge = (badge) => {
    
}

const updateBadge = (id, badge) => {

}

module.exports = { getBadges: getBadges, getBadgeByID: getBadgeByID, createBadge: createBadge, updateBadge: updateBadge}