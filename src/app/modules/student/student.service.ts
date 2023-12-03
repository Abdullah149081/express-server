import { Student } from "./student.model";

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
    getAllStudentFromDB,
    getSingleStudentFromDB,
    deleteAllData,
    singleStudentDelete,
};
