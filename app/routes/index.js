
module.exports = server =>{
server.route([{
    method: "GET",
    path: "/user",
    handler: getUser
},
{
    method: "POST",
    path: "/user/create",
    handler: createUser
}]);
server.route(
    {
        method: "GET",
        path: "/",
        handler: (request, response) => {
            console.log("tes");
            // return process.env.DB_NAME
        }
    }
);


server.route({
    method: "POST",
    path: "/add-contact",
    handler: (request, response)=>{
        
    }
})
}
const getUser = async(req, res) => {
    const Users = require('./../models/users');
    const data = await Users.getAllUser()
    console.log(data)
    return data
}
const createUser = async(req,res)=>{
    const User = require('./../models/users');

    const data = await User.createUser(req.username, req.password, req.name)
  
    return data;
}
