var express = require('express');
var app = express();
app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));
app.get('/topic', function(req, res) {
    var topics = [
        'JavaScript is...',
        'Nodejs is...',
        'Express is...'
    ];
    var output = `
    <a href="/topic?id=0">JavaScript</a><br>
    <a href="/topic?id=1">Nodejs</a><br>
    <a href="/topic?id=2">Express</a><br><br>
    ${topics[req.query.id]}
    `
    res.send(output);
})
app.get('/template', function(req, res) {
    res.render('temp', {time:Date(),  title:'Jade'});
})
app.get('/', function(req, res) {
    res.send('Hello Home Page');
});
app.get('/dynamic', function(req, res) {
    var lis = '';
    for(var i=0; i<5; i++) {
        lis = lis + '<li>coding</li>';
    }
    var time = Date();
    var output = `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <Title>
    
            </Title>
        </head>
        <body>
            Hello Dynamic!
            <ul>
            ${lis}
            </ul>
            ${time}
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