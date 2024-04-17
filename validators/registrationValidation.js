const { z } = require("zod");
const registrationValidation = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "minimum 3 characters required for name" }),
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .min(5, { message: "minimum 5 characters required for email" }),

  phone: z
    .string()
    .trim()
    .min(10, { message: "minimum 10 characters required for phone number" })
    .max(20, { message: "max 15 characters allowed for phone number" }),

  password: z
    .string({ required_error: "password is required" })
    .min(5, { message: "minimum 5 characters required for password" })
    .max(30, { message: "maximum 30 characters allowed for password" }),
});

module.exports = registrationValidation;
