const UserModel = require('./../models/users')
exports.getAllUser= (req, res)=>{
    const data = UserModel.getAllUser()
    return data;
}
exports.createUser=async (payload)=>{
    const user = await UserModel.createUser(payload.username, payload.password, payload.name)
    return user;
}