

module.exports = server =>{

    const Connection = require("./../dbconfig/index");
    const Users = require('./../models/users');
server.route({
    method: "GET",
    path: "/user",
    handler: async(request, response) => {
        let sql="SELECT * FROM users"
        const dbConnection = await Connection.connect;
        return data;
    }
});
server.route({
    method: "GET",
    path: "/",
    handler: (request, response) => {
        return "Hello World";
    }
});

server.route({
    method: "GET",
    path: "/create",
    handler: async(request, response) => {
        const data = await Users.createUser();
        return data;
    }
});

server.route({
    method: "POST",
    path: "/add-contact",
    handler: (request, response)=>{
        let sql
    }
})
}