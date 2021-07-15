const UserModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    async register(request, response) {    
        const  { email, password, ...data  } = request.body
        const userExist = await UserModel.findOne({ email })
        console.log(email, password)
        if(!userExist){
            try {
                const encriptedPassword = await bcrypt.hash(password, 10)
                const newUser = await UserModel.create({ ...data, email, password: encriptedPassword }) 
                const token = jwt.sign(
                    { id: newUser._id },
                    process.env.SECRET,
                    { expiresIn: 60 * 60 * 24}
                )                       
                response.json({ created: true,  token })    
            } catch (error) {   
                console.log(error) 
                response.status(500).json({ error})
            }
        }else{
            response.status(401).json({ userExist: true })
        }    
    },
    async login(request, response) {
        const { email, password } = request.body     
        const user = await UserModel.findOne({ email })
        console.log(email, password, user)
        if (user){    
            const match = await bcrypt.compare(password, user.password)
            if(match){
                const token = jwt.sign(
                    { id: user._id },
                    process.env.SECRET,
                    { expiresIn: 60 * 60 * 24}
                )                           
                console.log(token)
                response.status(200).json({ authenticated: true, token })    
             }else{
                response.status(401).json({ wrongPassword: true })
             }              
        } else {
            response.status(401).json({ findUser: false })
        }                 
    },
    async logout(request, response) {    
        response.json({ endSession: true })   
    }
}
