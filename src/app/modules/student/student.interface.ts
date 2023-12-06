/* eslint-disable no-unused-vars */
import { Model, Types } from "mongoose";

export type TGuardian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupation: string;
    motherContactNo: string;
};

export type TUserName = {
    firstName: string;
    middleName: string;
    lastName: string;
};

export type TLocalGuardian = {
    name: string;
    occupation: string;
    contactNo: string;
    address: string;
};

export interface TStudent {
    id: string;
    user: Types.ObjectId;
    name: TUserName;
    gender: "male" | "female";
    email: string;
    dateOfBirth: Date;
    contactNumber: string;
    emgContactNo: string;
    bloodGroup?: "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+ " | "AB-";
    presentAddress: string;
    permanentAddress: string;
    guardian: TGuardian;
    localGuardian: TLocalGuardian;
    profileImg?: string;
    isDelete: boolean;
}

export interface StudentModel extends Model<TStudent> {
    isStudentExit(id: string): Promise<TStudent | null>;
}
