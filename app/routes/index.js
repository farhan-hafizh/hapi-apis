
module.exports = server =>{
    const Connection = require("./../dbconfig/index");
    const Users = require('./../models/users');
    const userController = require('./../controllers/userController')
server.route({
    method: "GET",
    path: "/user",
    handler: async(request, response) => {
        const data = userController.getAllUser();
        
    }
});
server.route({
    method: "GET",
    path: "/",
    handler: (request, response) => {
        xon
    }
});

server.route({
    method: "POST",
    path: "/create",
    handler: async(request, response) => {
        const data = userController.createUser(request.payload);
        return data;
    }
});

server.route({
    method: "POST",
    path: "/add-contact",
    handler: (request, response)=>{
        
    }
})
}