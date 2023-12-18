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

const getAllAcademicSemesters = catchAsync(async (req, res) => {
    const result = await academicSemesterService.getAllAcademicSemesters();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic semesters are retrieved successfully",
        data: result,
    });
});

const getSingleAcademicSemester = catchAsync(async (req, res) => {
    const { courseId } = req.params;

    const result =
        await academicSemesterService.getSingleAcademicSemester(courseId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic semester is retrieved successfully",
        data: result,
    });
});

const updateAcademicSemester = catchAsync(async (req, res) => {
    const { courseId } = req.params;

    const result = await academicSemesterService.updateAcademicSemester(
        courseId,
        req.body,
    );

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic semester is retrieved successfully",
        data: result,
    });
});

export const academicSemesterController = {
    createAcademicSemester,
    getAllAcademicSemesters,
    getSingleAcademicSemester,
    updateAcademicSemester,
};
