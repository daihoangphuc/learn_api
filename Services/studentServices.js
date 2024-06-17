const Student = require('../models/students')

const createStudent = async (studentData) => {
    const student = new Student(studentData);
    return await student.save();
}
const getAllStudent = async () =>{
    return await Student.find();
}
const getStudentById = async (id) => {
    return await Student.findById(id);
}
const updateStudent = async (id, newstudentData) => {
    return await Student.findByIdAndUpdate(id, newstudentData, {new: true});
}
const deleteStudentById = async (id) =>{
    return await Student.findByIdAndDelete(id);
}

module.exports = {createStudent, getAllStudent, getStudentById, updateStudent, deleteStudentById}