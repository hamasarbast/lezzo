const Market = require('../model/market');

// هینانەوەی هەموو مارکێتەکان

exports.getMarket = (req , res)=>{
    Market.find().then(result =>{
        console.log(result);
        res.status(200).json({
            zanyareMarket: result


        });
    }).catch(err =>{
        console.log(err);
        res.status(404).json({
            error: err
        });
    });
}

// هینانەوی مارکێت بە پێی جۆرە مارکێت

exports.getMarket_query = async(req , res)=>{
  try {
    const market = await Market.find({"joreMarket":req.query.name});
    res.status(200).json({
      status:true,
      market
    });
  } catch (error) {
    res.status(404).json({
      status:false,
      error
    });
  }
}

// زیاد کردنی مارکێت ی کاڵا

exports.postMarket = async(req , res)=>{
    try {
        const market = await Market.create(req.body);
        res.status(200).json({
            status: true,
            market
        });
    } catch (error) {
        res.status(404).json({
            status: false,
            error
        });
    }
}