const mongoose = require('mongoose');

const marketSchema = mongoose.Schema({
    naweMarket:{
        type:String,
        required:true
    },
    kateKrdnawa:{
        type:String,
        required:true
    },
    kateDaxstn:{
        type:String,
        required:true
    },
    image:{
    type:String,
    
    },
    joreMarket:{
        type:String,
        required:true
    },
    kalakan:[{
        naweKala:{
            type:String,
            required:true
        },
        nrxeKala:{
        type:String,
        required:true
        },
        image:{
            type:String
        }
    }]
})

module.exports = mongoose.model("Market" , marketSchema);