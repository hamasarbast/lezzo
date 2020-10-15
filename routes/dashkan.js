// const express = require('express');
// const router = express.Router();
// const Dashkan = require("../model/dashkan");
// const multer = require("multer");


//  var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./public/uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + file.originalname);
//   },
// });
// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === "image/jpeg" ||
//     file.mimetype === "image/jpg" ||
//     file.mimetype === "image/png"
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };
// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 1024 * 1024 * 5,
//   },
//   fileFilter: fileFilter,
// });

// router.get("/", (req, res, next) => {
//     Dashkan.find()
//       .then((result) => {
//         console.log(result);
//         res.status(200).json({
//           zanyareDashkan: result,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json({
//           error: err,
//         });
//       });
//   });

// router.post("/" , upload.single("image_dashkan") , async(req , res , next)=>{
    
//     try {
//         const dashkan = await Dashkan.create(req.body);
//         res.status(200).json({
//             status:true,
//             dashkan
//         })
//     } catch (error) {
//         res.status(404).json({
//             status:false,
//             error
//         })
//     }
// })

// module.exports = router;