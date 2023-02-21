const mongoose = require("mongoose");
const { Schema } = mongoose;

const ListItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    }
});

const ListItem = mongoose.model("ListItem", ListItemSchema);
module.exports = ListItem;