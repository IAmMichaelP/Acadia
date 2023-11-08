const express = require('express');


const  app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/help', (req, res) => {
    res.render('help');
});
app.get('/sell', (req, res) => {
    res.send('sell');
});
app.get('/login', (req, res) => {
    res.render('login');
});
app.get('/signup', (req, res) => {
    res.render('signup');
});
app.get('/cart', (req, res) => {
    res.send('cart');
});
app.listen(3000);