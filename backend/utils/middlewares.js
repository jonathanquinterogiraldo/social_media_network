const jwt = require('jsonwebtoken')
const Busboy = require('busboy')
const cloudinary = require('cloudinary').v2

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET  
})

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
  },
  formData(request, response, next) {
    
    let uploadingFile = false
    let uploadingCount = 0

    function done() {
      if (uploadingFile) return
      if (uploadingCount > 0) return

      next()
    }

    const busboy = new Busboy({
      headers: request.headers
    })

    request.body = {}

    busboy.on('field', (key, value) => {
      request.body[key] = value
    })

    busboy.on('file', (key, file) => {
      uploadingFile = true
      uploadingCount++
      
      const stream = cloudinary.uploader.upload_stream(
        { upload_preset: 'twittor' },
        (error, res) => {
          console.log('hola')
          if (error) throw 'Something went wrong'

          uploadingFile = false
          uploadingCount--
          console.log('busboy', res)
          request.body[key] = res
          done()
        }
      )

      file.on('data', (data) => {
        stream.write(data)
      })

      file.on('end', () => { stream.end() })
    })

    busboy.on('finish', () => {
      done()
    })

    request.pipe(busboy)
  }
}