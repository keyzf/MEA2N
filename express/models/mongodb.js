var mongoose = require('mongoose');

var cfg = require('./../mongodbCfg');

mongoose.connect('mongodb://'+cfg.ipAddress+':'+cfg.hostPost+'/'+cfg.database);

exports.mongoose = mongoose;
