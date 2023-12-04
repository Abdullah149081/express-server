/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { studentService } from "./student.service";

const getAllStudent = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const result = await studentService.getAllStudentFromDB();
        res.status(200).json({
            success: true,
            message: "Students are retrieved successfully'",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const getSingleStudent = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { studentId } = req.params;

        const result = await studentService.getSingleStudentFromDB(studentId);

        res.status(200).json({
            success: true,
            message: "Students are retrieved successfully'",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const singleStudentDelete = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { studentId } = req.params;

        const result = await studentService.singleStudentDelete(studentId);

        res.status(200).json({
            success: true,
            message: "Students are delete successfully'",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const deleteAllData = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const result = await studentService.deleteAllData();

        res.status(200).json({
            success: true,
            message: "Students All data delete'",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

export const studentControllers = {
    getAllStudent,
    getSingleStudent,
    deleteAllData,
    singleStudentDelete,
};
