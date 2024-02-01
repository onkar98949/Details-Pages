import * as Yup from 'yup';

export const signupValidation = Yup.object({
    name:Yup.string().min(2).max(25),
    email:Yup.string().email("Enter valid email"),
    password:Yup.string().min(6,'Password should be min six characters'),
    confirm_password:Yup.string().oneOf([Yup.ref("password"),null],"Password must Match"),
})