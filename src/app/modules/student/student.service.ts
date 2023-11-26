import { TStudent } from "./student.interface";
import { Student } from "./student.model";

const createStudentInDB = async (studentData: TStudent) => {
    if (await Student.isStudentExit(studentData.id)) {
        throw new Error("Student already crate");
    }
    const result = await Student.create(studentData);

    return result;
};

const getAllStudentFromDB = async () => {
    // const result = await Student.find();
    const result = await Student.aggregate();
    return result;
};

const getSingleStudentFromDB = async (id: string) => {
    // const result = await Student.findOne({ id });
    const result = await Student.aggregate([
        {
            $match: { id },
        },
    ]);
    return result;
};

const singleStudentDelete = async (id: string) => {
    const result = await Student.updateOne({ id }, { isDelete: true });
    return result;
};

const deleteAllData = async () => {
    const result = await Student.deleteMany();
    return result;
};

export const studentService = {
    createStudentInDB,
    getAllStudentFromDB,
    getSingleStudentFromDB,
    deleteAllData,
    singleStudentDelete,
};
