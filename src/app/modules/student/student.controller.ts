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

export const studentControllers = {
  createStudent,
};
