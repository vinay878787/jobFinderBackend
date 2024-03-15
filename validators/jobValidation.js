const { z } = require("zod");

const jobValidation = z.object({
  companyName: z.string({ required_error: "Company name is required" }).trim(),
  title: z.string({ required_error: "Title is required" }).trim(),
  jobType: z.string({ required_error: "Job type is required" }).trim(),
  salary: z.string({ required_error: "Salary is required" }).trim(),
  jobStyle: z.string().optional(),
  location: z.string().optional(),
  jobDescription: z
    .string({ required_error: "Job description is required" })
    .trim(),
  about: z.string({ required_error: "About section is required" }).trim(),
  skills: z.array(z.string()).min(1, { message: "Skills are required" }), 
  additionalInformation: z.string().trim().optional(),
  duration: z.string().trim().optional(),
});

module.exports = jobValidation;


