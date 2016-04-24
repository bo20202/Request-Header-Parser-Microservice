var handler = require(process.cwd() +'/app/controllers/reqHandler.js');
module.exports = function(app){
    app.get('/', function(req, res){
        res.json(handler(req));
    })
}