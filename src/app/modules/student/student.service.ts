import { StudentModel1 } from '../student.model';
import { Student } from './student.interface';

const createStudentInDB = async (student: Student) => {
  const result = await StudentModel1.create(student);
  return result;
};

export const studentService = {
  createStudentInDB,
};
