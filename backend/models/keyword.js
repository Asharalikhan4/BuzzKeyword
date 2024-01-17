const mongoose = require("mongoose");

const KeywordSchema = new mongoose.Schema({
    word: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
        default: 1
    }
},{
    timestamps: true
});

const keyword = mongoose.model("keyword", KeywordSchema);
module.exports = keyword;