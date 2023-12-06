import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { studentValidationSchema } from "../student/student.valid";
import { UserControllers } from "./user.controller";

const router = express.Router();

router.post(
    "/create-user",
    validateRequest(studentValidationSchema.createValidationSchema),
    UserControllers.createStudent,
);

export const userRoutes = router;
