const mongoose = require('mongoose');

const SuggestSchema = new mongoose.Schema({
    State: {
        type: String,
        required: [true, 'State name is required'],
        maxlength: 50,
    },
    food: {
        type: String,
    },
    foodImage:{
        type:String
    },
    festival: {
        type: String,
    },
    festivalImage:{
        type:String
    },
    clothes: {
        type: String,
    },
    clothesImage:{
        type:String
    },
});

const Suggest = mongoose.model('Suggest', SuggestSchema);

module.exports = Suggest;
