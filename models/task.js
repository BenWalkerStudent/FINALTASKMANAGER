const mongoose = require('mongoose')
const { stringify } = require('querystring')


const TaskSchema = new mongoose.Schema({

    name:{

        type:String,
        required:[true,'noName'],
        trim:true,
        maxlength:[30,'toLong']

    },

    completed: {

        type: Boolean,
       // default: false

    }

})

module.exports = mongoose.model('Task',TaskSchema)
