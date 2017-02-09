var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('./dist'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'dist/index.html'));
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    res.status = 404;
    next(err);
});
if (app.get('env') !== 'development')
{
    app.listen(3000, function () {
        console.log('Example listening on port 3000!');
    });
}
else{
    app.listen(4200, function () {
        console.log('Example listening on port 4200!');
    });
}
module.exports = app;