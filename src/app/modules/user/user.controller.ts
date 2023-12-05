/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { userService } from "./user.service";

const createStudent = catchAsync(async (req, res) => {
    const { password, student: studentData } = req.body;

    const result = await userService.createStudentInDB(password, studentData);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Student is create Successfully",
        data: result,
    });
});

export const UserControllers = {
    createStudent,
};
