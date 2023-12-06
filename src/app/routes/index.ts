import { Router } from "express";
import { academicRoute } from "../modules/academicSemester/academicSemester.route";
import { studentRoutes } from "../modules/student/student.route";
import { userRoutes } from "../modules/user/user.route";

const router = Router();

const moduleRoutes = [
    {
        path: "/users",
        route: userRoutes,
    },
    {
        path: "/students",
        route: studentRoutes,
    },
    {
        path: "/academic-semesters",
        route: academicRoute,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
