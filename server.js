const express = require('express');
const path = require('path');
const app = express();

app.use((express.static(path.join(__dirname, 'build'))))

app.get('/ping', function(req, res){
    return res.send('pongalong');
});

app.get('/api/test', function(req,res){
    let msg = {};
    msg.sender="Joe";
    msg.writing="Roses are Red....";
    return res.send(JSON.stringify(msg));
});

app.listen(process.env.PORT || 8080);