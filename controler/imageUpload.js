const multer = require('multer');


// multter for upload image 

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  });
  const fileFilter = (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/png"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5,
    },
    fileFilter: fileFilter,
  }).single('imagee')


// زیاد کردنی وێنە

exports.postImage =  async(req , res)=>{
    upload(req, res,err=>{
      if (err) {
        res.status(404).json({
          status:false,
          err
        })
      }
      return res.json({
        status:true,
        image:res.req.file.path,
        filename:res.req.file.filename
      })
    })
  } 
  