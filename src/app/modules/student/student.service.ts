import { Student } from './student.interface';
import { StudentModel1 } from './student.model';

const createStudentInDB = async (student: Student) => {
  const result = await StudentModel1.create(student);
  return result;
};

const getAllStudentFromDB = async () => {
  const result = await StudentModel1.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel1.findOne({ id });
  return result;
};

export const studentService = {
  createStudentInDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
