var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function(req, res) {
    res.send('Hello Home Page');
});
app.get('/dynamic', function(req, res) {
    var lis = '';
    for(var i=0; i<5; i++) {
        lis = lis + '<li>coding</li>';
    }
    var output = `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <Title>
    
            </Title>
        </head>
        <body>
            Hello Dynamic!
            ${lis}
        </body>
    </html>`
    res.send(output);
})
app.get('/login', function(req, res) {
    res.send('Login Please')
});
app.listen(3000, function() {
    console.log('Connected 3000 port!');
});