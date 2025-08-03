const mongo = require('mongodb').MongoClient;
const client = require('socket.io').listen(4000).sockets;
//Connector  para mongo
mongo.connect('mongodb://localhost/mongochat', function(err, db){
    if(err){
        throw err;
    }
    console.log('MongoDB connected....');
});
