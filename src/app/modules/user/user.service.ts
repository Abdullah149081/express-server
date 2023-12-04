import { v4 as uuidv4 } from "uuid";
import { TStudent } from "../student/student.interface";
import { TUser } from "./user.interface";

import config from "../../config";
import { Student } from "../student/student.model";
import { User } from "./user.model";

const createStudentInDB = async (password: string, studentData: TStudent) => {
    const userData: Partial<TUser> = {};

    userData.password = password || (config.default_password as string);

    //set student role
    userData.role = "student";

    //set manually generated it
    userData.id = uuidv4();

    const newUser = await User.create(userData);

    if (Object.keys(newUser).length) {
        studentData.id = newUser.id;
        studentData.user = newUser._id;

        const newStudent = await Student.create(studentData);
        return newStudent;
    }
};

export const userService = {
    createStudentInDB,
};
