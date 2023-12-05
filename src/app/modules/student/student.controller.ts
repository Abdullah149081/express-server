import httpStatus from "http-status";
/* eslint-disable @typescript-eslint/no-explicit-any */
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { studentService } from "./student.service";

const getAllStudent = catchAsync(async (req, res) => {
    const result = await studentService.getAllStudentFromDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Students are retrieved successfully'",
        data: result,
    });
});

const getSingleStudent = catchAsync(async (req, res) => {
    const { studentId } = req.params;

    const result = await studentService.getSingleStudentFromDB(studentId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Students are retrieved successfully'",
        data: result,
    });
});

const singleStudentDelete = catchAsync(async (req, res) => {
    const { studentId } = req.params;

    const result = await studentService.singleStudentDelete(studentId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Students are delete successfully'",
        data: result,
    });
});

const deleteAllData = catchAsync(async (req, res) => {
    const result = await studentService.deleteAllData();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Students All data delete'",
        data: result,
    });
});

export const studentControllers = {
    getAllStudent,
    getSingleStudent,
    deleteAllData,
    singleStudentDelete,
};
