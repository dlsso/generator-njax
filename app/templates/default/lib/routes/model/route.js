var path = require('path');
var fs = require('fs');
var async = require('async');
var ObjectId = require('mongoose').Types.ObjectId;
module.exports = function(app){

    var route = require('./_gen/<%= _model.name %>.gen')(app);
    /**
     * Custom Code Goes here
     */
    route.init();

}