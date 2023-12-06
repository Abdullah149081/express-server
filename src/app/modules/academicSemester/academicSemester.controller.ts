import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const createAcademicSemester = catchAsync(async (req, res) => {
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic semester is created successfully",
        data: "  message: 'Academic semester is created successfully',",
    });
});

export const academicSemesterController = {
    createAcademicSemester,
};
