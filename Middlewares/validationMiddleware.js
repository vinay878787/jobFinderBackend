const {z} = require("zod");
const validate = (schema) => async (req, res, next) => {
  try {
    console.log("req.body", req.body);
    if (!schema instanceof z.ZodType) {
      return res.status(404).json({ message: "zod schema error" });
    } else {
      const parseBody = await schema.parseAsync(req.body);

      // In the context of Zod's parseAsync method, parsing refers to the process of converting raw input data into a structured format based on the defined schema. Here's what it entails:
      console.log("parse.body", parseBody);
      next();
    }
  } catch (err) {
    const status = 422;
    const message = "please give proper input";
    const extraDetails = err.errors[0].message;
    const error = { status, message, extraDetails };
    // console.log(err);
    next(error);
  }
};
module.exports = validate;
