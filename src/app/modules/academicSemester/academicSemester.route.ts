import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { academicSemesterController } from "./academicSemester.controller";
import { academicSemesterValidations } from "./academicSemester.valid";

const router = express.Router();

router.post(
    "/create-academic-semester",
    validateRequest(
        academicSemesterValidations.createAcademicSemesterValidationSchema,
    ),
    academicSemesterController.createAcademicSemester,
);

export const academicRoute = router;
