const multer = require('multer')

// create disk storage
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads')
    },
    filename: (req, file, callback) => {
        const filename = `image-${Date.now()}-${file.originalname}`
        callback(null, filename)
    }
})


// filename
const fileFilter = (req, file, callback) => {
    if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/avif') {
        callback(null, true)
    }
    else {
        callback(null, false)
        return callback(new Error('Only png, jpg, avif or jpeg files are accepted'))

    }
}


// multer configuration
const multerConfig = multer({
    storage,
    fileFilter
})


// export
module.exports= multerConfig