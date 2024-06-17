const mongoose = require('mongoose');

// Student schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    grade: {
        type: String,
        required: true
    }
});

// Student model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;