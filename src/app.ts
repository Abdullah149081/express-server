import cors from "cors";
import express, { Request, Response } from "express";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import { studentRoutes } from "./app/modules/student/student.route";
import { userRoutes } from "./app/modules/user/user.route";
const app = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/v1/student", studentRoutes);
app.use("/api/v1/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        status: true,
        message: "Hello World!",
    });
});

app.use(globalErrorHandler);

export default app;
