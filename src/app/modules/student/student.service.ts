import { TStudent } from "./student.interface";
import { Student } from "./student.model";

const createStudentInDB = async (studentData: TStudent) => {
    const student = new Student(studentData);
    if (await student.isStudentExit(student.id)) {
        throw new Error("Student already crate");
    }
    const result = await student.save();
    return result;
};

const getAllStudentFromDB = async () => {
    const result = await Student.find();
    return result;
};

const getSingleStudentFromDB = async (id: string) => {
    const result = await Student.findOne({ id });
    return result;
};

export const studentService = {
    createStudentInDB,
    getAllStudentFromDB,
    getSingleStudentFromDB,
};
