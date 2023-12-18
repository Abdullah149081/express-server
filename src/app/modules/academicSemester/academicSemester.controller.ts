import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { academicSemesterService } from "./academicSemester.service";

const createAcademicSemester = catchAsync(async (req, res) => {
    const result = await academicSemesterService.createAcademicSemester(
        req.body,
    );

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic semester is created successfully",
        data: result,
    });
});

export const academicSemesterController = {
    createAcademicSemester,
};
