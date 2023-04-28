import { z } from "zod"


export const RegisterSchema = z.object({
    firstName: z.string().min(1, { message: "First Name is required"}),
    lastName: z.string().min(1, { message: "Last Name is required"}),
    email: z.string().min(1, { message: "Email is required"}),
    password: z.string().min(1,  {message: "Password is required"}),
    contactNumber: z.string().min(1, { message: "Contact Number is required"}),

})

export const LoginSchema = z.object({
    email: z.string().min(1, { message: "Email is required"}),
    password: z.string().min(1, { message: "Password is required"})
})

export type IRegister = z.infer<typeof RegisterSchema>