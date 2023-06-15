const express = require('express');
const app = express();
const {PORT} = require('./config/serverConfig');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index')


const setUpAndStartServer = () =>{
    app.use(express.static(__dirname + '/public'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.use('/api', apiRoutes);

    app.listen(PORT, () => {
        console.log(`Server Started on Port ${PORT}`);
    })
}

setUpAndStartServer();