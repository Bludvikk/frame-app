import { z } from "zod"


export const RegisterSchema = z.object({
    firstName: z.string().min(1, { message: "First Name is required"}),
    lastName: z.string().min(1, { message: "Last Name is required"}),
    email: z.string().min(1, { message: "Email is required"}),
    password: z.string().min(1,  {message: "Password is required"}),
    contactNumber: z.string().min(1, { message: "Contact Number is required"}),
    status: z.string().nullable(),
    role: z.string().nullable(),
})

export const LoginSchema = z.object({
    email: z.string().min(1, { message: "Email is required"}),
    password: z.string().min(1, { message: "Password is required"})
})

export const userTable = z.object({
    id: z.number(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    contactNumber: z.string(),
    status: z.string(),
    role: z.string(),
})

export type IuserTable = z.infer<typeof userTable>
export type ILogin = z.infer<typeof LoginSchema>
export type IRegister = z.infer<typeof RegisterSchema>