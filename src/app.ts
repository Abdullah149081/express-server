import cors from "cors";
import express, { Request, Response } from "express";
import { studentRoutes } from "./app/modules/student/student.route";
const app = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/v1/student", studentRoutes);

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        status: true,
        message: "Hello World!",
    });
});

export default app;
