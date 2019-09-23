const multer = require('multer');

/**
 * Promisified Multer
 * @param req
 * @param res
 */
function UploadFileHelper(req, res) {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public')
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname)
        }
    });
    const upload = multer({storage}).single('file');
    return new Promise((resolve, reject) => {
        upload(req, res, err => {
            if (err) {
                return reject(err)
            } else {
                resolve(req.file)
            }
        })
    })

}

module.exports = UploadFileHelper;