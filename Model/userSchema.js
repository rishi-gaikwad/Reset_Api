const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

        type:{
                type:String,
                required:true
        },
        
        
        uid:{
                type:Number,
                required:true
        },

        name: {
                type:String,
                required:true
        },
        tagline:{
                type:String,
                required:true
        },
        schedule:{
                type:Date,
                required:true
        }, 
        description:{
                type:String,
                required:true
        },
        image:{
                type:Object,
                required:true
        },
        moderator:{
                type:String,
                required:true
        },
        category:{
                type:String,
                required:true
        },
        sub_category:{
                type:String,
                required:true
        },
        rigor_rank:{
                type:Number,
                required:true
        },
        attendees:{
                type:Array,
                required:true
        }
      
})




const User = mongoose.model('User', userSchema);

module.exports = User;
