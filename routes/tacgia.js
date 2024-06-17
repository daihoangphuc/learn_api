
const tacgiaController = require("../controllers/studentsController");

const router = require("express").Router();

//get Student By Id
router.get('/getStudent/:id', tacgiaController.getStudentById);
//get All Student
router.get('/getAllStudent', tacgiaController.getAllStudent);
//Add student
router.post('/addStudent', tacgiaController.addStudent);
//update student
router.put('/updateStudent/:id', tacgiaController.updateStudent);
//delete Student
router.delete('/deleteStudent/:id', tacgiaController.deleteStudent);


module.exports = router;