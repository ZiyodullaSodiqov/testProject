const mongoose = require('mongoose');
const regSchema = mongoose.Schema({

    name: {
        type: String , 
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    Birthdate:{
        type: String,
        required: true
    },

    phone_number:{
        type: Number,
        required: true
    },

    passportId : {
        type: String,
    },

    region:{
        type: String,
        required: true
    },

    address:{
        type: String,
        required: true
    },

    zip_code:{
        type: Number,
        required: true
    },

    university:{
        type: String,
        required: true
    },

    start_university:{
        type: String,
        required: true
    },

    graduation_yearUniversity:{
        type: String,
        required: true
    },

    work_exprience:{
        type: String,
        required: true
    },

    exprience_year:{
        type: Number,
        required: true
    },

    letter:{
        type: String,
        required: true
    },

    gender:{
        type: String,
        require: true
    },

    jshr:{
      type: Number,
      required: true
    },

    hwo_worked:{
        type: String,
        required: true
    },

    university_degree:{
        type: String,
        required: true
    },

    university_direction:{
        type: String,
        required: true
    },
    
    date:{
        type: Date, 
        default: Date.now()
    }

})

module.exports = mongoose.model('reg', regSchema);

