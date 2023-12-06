import { z } from "zod";

const userNameValidationSchema = z.object({
    firstName: z
        .string()
        .min(1)
        .max(20)
        .refine((value) => /^[A-Z]/.test(value), {
            message: "First Name must start with a capital letter",
        }),
    middleName: z.string(),
    lastName: z.string().refine((data) => /^[A-Za-z]+$/.test(data), {
        message: "Last Name must contain only letters",
    }),
});

const guardianValidationSchema = z.object({
    fatherName: z.string(),
    fatherOccupation: z.string(),
    fatherContactNo: z.string(),
    motherName: z.string(),
    motherOccupation: z.string(),
    motherContactNo: z.string(),
});

const localGuardianValidationSchema = z.object({
    name: z.string(),
    occupation: z.string(),
    contactNo: z.string(),
    address: z.string(),
});

export const createValidationSchema = z.object({
    body: z.object({
        password: z.string().max(20),
        student: z.object({
            name: userNameValidationSchema,
            gender: z.enum(["male", "female"]),
            dateOfBirth: z.date().optional(),
            email: z.string().email(),
            contactNumber: z.string(),
            emgContactNo: z.string(),
            bloodGroup: z.enum([
                "A+",
                "A-",
                "B+",
                "B-",
                "O+",
                "O-",
                "AB+ ",
                "AB-",
            ]),
            presentAddress: z.string(),
            permanentAddress: z.string(),
            guardian: guardianValidationSchema,
            localGuardian: localGuardianValidationSchema,
            profileImg: z.string(),
        }),
    }),
});

export const studentValidationSchema = {
    createValidationSchema,
};
