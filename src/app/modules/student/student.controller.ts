import { Request, Response } from 'express';
import { studentService } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await studentService.createStudentInDB(studentData);

    res.status(200).json({
      success: true,
      message: 'Student is create Successfully',
      data: result,
    });
  } catch (error) {
    console.error(error);
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: "Students are retrieved successfully'",
      data: result,
    });
  } catch (error) {
    console.error(error);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await studentService.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: "Students are retrieved successfully'",
      data: result,
    });
  } catch (error) {
    console.error(error);
  }
};

export const studentControllers = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
