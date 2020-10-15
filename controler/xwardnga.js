const Xwardnga = require('../model/xwardnga');

// id هینانەوەی خواردنگە بە پێی 

exports.getXwardnga_Byid = async (req , res) =>{
  try {
    const mathams = await Xwardnga.findById({_id: req.params.id});
    res.status(200).json({
      status:true,
      mathams
    });
  } catch (error) {
    res.status(404).json({
      status:false,
      error
    });
  }
}


// هینانەوەی هەموو خواردنەکان

exports.getxwardnga =(req , res)=>{

    Xwardnga.find()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        zanyareXwardnga: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        error: err,
      });
    });
}

// هینانەوەی خواردن بە پێی جۆرە خواردن 

exports.getxwardnga_query = async(req, res) => {

    try {
      const xwardnga = await Xwardnga.find({"xwardnakan.joreXwardn":req.query.name})
  
      res.status(200).json({
        status:true,
        xwardnga
      })
    } catch (error) {
      console.log(error);
      res.status(404).json({
        status:false,
        error
      })
    }
  
  
}
// زیاد کردنی خواردن و خواردنگا

exports.postXwardn = async (req, res, next) => {
  try {
    const xwardnga = await Xwardnga.create(req.body)

    res.status(201).json({
      status:true,
      xwardnga
    })
  } catch (error) {
    res.status(404).json({
      status:false,
      error
    })
  }  
}



