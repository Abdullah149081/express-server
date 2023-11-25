import express from "express";
import { studentControllers } from "./student.controller";

const router = express.Router();

router.post("/create-student", studentControllers.createStudent);

router.get("/", studentControllers.getAllStudent);

router.get("/:studentId", studentControllers.getSingleStudent);

router.delete("/:studentId", studentControllers.singleStudentDelete);

router.delete("/delete", studentControllers.deleteAllData);

export const studentRoutes = router;
