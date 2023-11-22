import { Request, Response } from 'express';
import { studentService } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    const result = await studentService.createStudentInDB(student);

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
