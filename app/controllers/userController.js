const UserModel = require('./../models/users')
exports.getAllUser= async(req, res)=>{
    const data = await UserModel.getAllUser()
    return data
}
exports.createUser=async (payload)=>{
    const user = await UserModel.createUser(payload.username, payload.password, payload.name)
    return user;
}