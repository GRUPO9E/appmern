const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();


const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/api/auth', require('./routes/Auth'));

app.use('/api', require('./routes/App'));

// login

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), () => {
    console.log("Sever on port: ", app.get('port'));
});