/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { userService } from "./user.service";
import { UserValidation } from "./user.valid";

const createStudent = async (req: Request, res: Response) => {
    try {
        const { student: studentData } = req.body;
        const zodParseData = UserValidation.parse(studentData);
        const result = await userService.createStudentInDB(zodParseData);

        res.status(201).json({
            success: true,
            message: "Student is create Successfully",
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "something went wrong",
            err: error,
        });
    }
};

export const UserControllers = {
    createStudent,
};
