const UserModel = require('../models/user.model')
const bcrypt = require('bcrypt')

module.exports = {
    async register(request, response) {
        const  { name, first_lastname, second_lastname, nickname, email, password } = request.body
        const userExist = await UserModel.findOne({ email })
    
        if(!userExist){
            try {
                await UserModel.create({  name, first_lastname, second_lastname, nickname, email, password: await bcrypt.hash(password, 10) })    
                response.json({'created': true })    
            } catch (error) {   
                console.log(error) 
                response.status(500).json({ error})
            }
        }else{
            response.json({ userExist: true })
        }    
    },
    async login(request, response) {
        const { email, password } = request.body     
        const user = await UserModel.findOne({ email: email })
    
        if (user){    
            const match = await bcrypt.compare(password, user.password)
            if(match){
                request.session.userId = user._id;
                response.json({ authenticated: true })                
                return match ? user : null;
             }else{
                response.json({ wrongPassword: true })
             }              
        } else {
            response.json({ findUser: false })
        }                 
    },
    async logout(request, response) {
        request.session.userId = null;
        response.json({ endSession: true })   
    }
}