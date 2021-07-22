const jwt = require('jsonwebtoken')

module.exports = {
  authorization(request, response, next) {
    try {
      const { authorization } = request.headers
      if (!authorization) {
        throw Error('Your session has expired')
      }

      const [bearer, token] = authorization.split(' ')
      if (!token) {
        throw Error('Your session has expired')
      }

      const { id } = jwt.verify(token, process.env.SECRET)

      request.user = id

      next()
    }
    catch (error) {
      response.status(401).json({ message: error.message })
    }
  }
}