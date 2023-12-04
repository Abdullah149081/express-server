/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { userService } from "./user.service";

const createStudent = async (req: Request, res: Response) => {
    try {
        const { password, student: studentData } = req.body;

        const result = await userService.createStudentInDB(
            password,
            studentData,
        );

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
