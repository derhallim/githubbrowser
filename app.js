const octicons = require("octicons");
const express = require('express');
const github = require('./services/github-service');
const port = process.env.PORT || 8888;

let app = express();

app.use(express.static(__dirname + '/site'));



app.get('/github/:username', (req, res) => {
    let username = req.params.username;
    console.log(username);

    github.getUser(username).then((results) => {
            res.send(results);
        }).catch((e) => {
            res.status(400).send(e);
        });
       
})

app.listen(port, () => {
    console.log('Github app started on port', port);
});

module.exports.port = port;