const mongoose = require('mongoose');
const schema = mongoose.Schema;

const contentschema = new schema({
    tags: [String],
    heading: String,
    content: Object,

}
);

module.exports = mongoose.model('Content', contentschema, 'Content');