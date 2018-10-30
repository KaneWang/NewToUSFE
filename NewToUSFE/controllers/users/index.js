'use strict';

var IndexModel = require('../../models/users/index');


module.exports = function (router) {

    var model = new IndexModel();

    router.get('/', function (req, res) {
        
        console.log("this is user page")
        res.render('users/index', model);
        
        
    });

};
