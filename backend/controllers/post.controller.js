const PostModel = require('../models/post.model')

module.exports = {
    async post(request, response) {
        const  { content } = request.body

        if(request.session.userId){        
            try {
                await PostModel.create({ content, date_created: Date.now()  })    
                response.json({'created': true })    
            } catch (error) {   
                console.log(error) 
                response.status(500).json({ error })
            }
        }else{
            response.json({ userSession: false })
        }    
    }   
}
