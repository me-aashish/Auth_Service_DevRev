const express = require('express');
const app = express();
const {PORT} = require('./config/serverConfig');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index');
const cors = require("cors");
const { Flight } = require('./models/index');

const setUpAndStartServer = async() =>{
    app.use(express.static(__dirname + '/public'));
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.use('/api', apiRoutes);
    // let filter = {};
    // filter.departureTime = "2023-07-07";
    // const resp = await Flight.findAll({
    //     where:filter
    // })
    // console.log(resp);
    app.listen(PORT, () => {
        console.log(`Server Started on Port ${PORT}`);
    })
}

setUpAndStartServer();