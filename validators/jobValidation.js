const { z } = require("zod");

const jobValidation = z.object({
  company: z.string({ required_error: "Company name is required" }).trim(),
  logo:z.string({required_error:"logo url is required"}).trim(),
  jobTitle: z.string({ required_error: "Title is required" }).trim(),
  salary: z.string({ required_error: "Salary is required" }).trim(),
  jobType: z.string({ required_error: "Job type is required" }).trim(),
  jobStyle: z.string().optional(),
  location: z.string().optional(),
  description: z
    .string({ required_error: "Job description is required" })
    .trim(),
  about: z.string({ required_error: "About section is required" }).trim(),
  skills: z.array(z.string()).min(1, { message: "Skills are required" }), 
  additionalInformation: z.string().trim().optional(),
});

module.exports = jobValidation;


