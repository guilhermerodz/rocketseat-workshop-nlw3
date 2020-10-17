import multer from 'multer'
import path from 'path'

const uploadConfig: multer.Options = {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, cb) => {
      const fileName = `${Date.now()}-${file.originalname}`

      cb(null, fileName)
    }
  })
}

export default uploadConfig
