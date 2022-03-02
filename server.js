require('dotenv').config()
const Hapi = require("hapi");

const server = new Hapi.Server(
    {
        "host": process.env.APP_URL,
        "port": process.env.PORT
    }
);

require('./app/routes/index')(server)

server.start(error => {
    if(error) {
        throw error;
    }
    console.log("Listening at " + server.info.uri);
});