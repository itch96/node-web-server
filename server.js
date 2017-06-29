const express = require('express');
const hbs = require('hbs');

var app = express();
var port = process.env.PORT || 8080;

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

// app.use((req, res, next) => {
//     res.render('maintenance.hbs', {
//         title: 'Maintenance Page',
//         welcomeMessage: 'We will be back soon.'
//     });
// });

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());

app.get('/', (req, res) => {
    res.render('home.hbs', {
        title: 'Home Page',
        welcomeMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur facilis assumenda optio distinctio! Accusantium blanditiis, esse debitis. Incidunt quibusdam maiores consequatur commodi mollitia molestiae deleniti, repellendus fugiat culpa ducimus maxime.'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title: 'About Page'
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to fulfill request'
    });
    res.end();
});

app.listen(port, () => {console.log(`Server is up on port ${port}`);});