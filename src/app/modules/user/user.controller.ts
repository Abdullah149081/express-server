/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";

const createStudent = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
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
    } catch (error) {
        next(error);
    }
};

export const UserControllers = {
    createStudent,
};
