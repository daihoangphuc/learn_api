const Student = require("../Services/studentServices");

const studentControllers = {
    //get Student by Id
    getStudentById : async (req, res) =>{
        try{
            const student = await Student.getStudentById(req.params.id);
            res.status(200).json(student);
        }catch(error){
            res.status(500).json(err)
        }
    },
    //get all Student
    getAllStudent : async (req, res) => {
        try{
            const getallstudent = await Student.getAllStudent();
            res.status(200).json(getallstudent);
        }catch(error){
            res.status(500).json(err);
        }
    },
    //Add student
    addStudent : async(req, res) => {
        try{
            const newstudent = await Student.createStudent(req.body);
            res.status(200).json("Sinh vien da duoc them thanh cong!", newstudent);
        }catch(err) {
            res.status(500).json(err);
        }
    },
    //update student
    updateStudent : async (req, res) => {
        try{
            const updateStudent = await Student.updateStudent(req.params.id, req.body,{ new: true });
            res.status(200).json( "Cap nhat sinh vien thanh cong!", updateStudent);
        }catch(err){
            res.status(500).json(err);
        }
    },
    //delete Student
    deleteStudent : async (req, res) => {
        try{
            const deletestudent = await Student.deleteStudentById(req.params.id)
            res.status(200).json("Sinh vien da duoc xoa!");
        }catch(error){
            res.status(500).json(err);
        }
    }
};
module.exports = studentControllers;