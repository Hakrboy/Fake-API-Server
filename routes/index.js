

const express = require('express'); 

function eRoutes() {
    const router = express.Router();
    var route =  require('../controller/route.controller')(router);
    return router;
}
module.exports = eRoutes;