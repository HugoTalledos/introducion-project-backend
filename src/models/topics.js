const mongoose = require('mongoose');
const { Schema } = mongoose;

const TopicSchema  = new Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    date_added: { type: String, required: true},
    father: { type: String, required: true}
});

module.exports = mongoose.model('Topics', TopicSchema);