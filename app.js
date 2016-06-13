var express = require('express');

var app = express();

var PORT = 9000;



app.use(express.static('public'))
app.use(express.static('src/views'))


app.get('/roles', function (req, res) {

    res.send({
        role: 'ROLE_ADMIN'
    });

});

app.listen(PORT, function (err) {
    if (err) {
        console.log("error while starting");
    } else {
        console.log("app runnning on port " + PORT);
    }
});