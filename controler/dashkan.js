const Dashkan = require('../model/dashkan');

exports.getDashkan =  (req, res) => {
 Dashkan.find()
    .then((result) => {
  console.log(result);
  res.status(200).json({
  zanyareDashkan: result,
  });
  })
  .catch((err) => {
  console.log(err);
  res.status(500).json({
  error: err,
  });
  });
 }

 exports.postDashkan = async(req , res)=>{
   try {
     const dashkan = await Dashkan.create(req.body);
     res.status(200).json({
       status:true,
       dashkan
     });
   } catch (error) {
     res.status(404).json({
       status:false,
       error
     });
     
   }
 }