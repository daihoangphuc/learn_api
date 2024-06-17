const mongoose = require('mongoose');

// Class schema
const classSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    teacher: {
        type: String,
        required: true
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }]
});

// Class model
const Class = mongoose.model('Class', classSchema);

module.exports = Class;