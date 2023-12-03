import { TStudent } from "../student/student.interface";

import { User } from "./user.model";

const createStudentInDB = async (studentData: TStudent) => {
    // if (await Student.isStudentExit(studentData.id)) {
    //     throw new Error("Student already crate");
    // }
    const result = await User.create(studentData);

    return result;
};

export const userService = {
    createStudentInDB,
};
