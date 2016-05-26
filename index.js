'use strict';

module.exports.init = function(config, logger, stats) {  
  return {
   onrequest: function(req, res, next) {      
      if(config.path == req.url)
        res.end('OK')
      else
        next()
    }
  }
}