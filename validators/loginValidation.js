const {z} = require("zod");

const loginValidation = z.object({
    email:z
    .string({required_error:"email is required"})
    .trim()
    .min(5, { message: "minimum 5 characters required" }),

    password:z
    .string({required_error:"password is required"})
    .min(5,{message:"password needs minimum 5 characters"})
    .max(30,{message:"password can max 30 characters"})
})

module.exports = loginValidation;