const PostModel = require('../models/post.model')

module.exports = {
    async post(request, response){
        const  { content } = request.body

        if(request.session.userId){        
            try {
                await PostModel.create({ content, date_created: Date.now() })    
                response.json({'created': true })    
            } catch (error) {   
                console.log(error) 
                response.status(500).json({ error })
            }
        }else{
            response.json({ userSession: false })
        }    
    },
    async posts(request, response){    
            
            try{  
                if(request.user){
                    const allPosts = await PostModel.find({})
                    response.json({ allPosts })
                }    
            }catch(error){
                response.status(500).json({ error })
                console.log(error)
            }            
       
    }
}
