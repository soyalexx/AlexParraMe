const express = require('express');
const app = express();
const handlebars = require('express-handlebars').create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.render("home");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}.`);
});