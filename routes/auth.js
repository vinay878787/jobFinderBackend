const express = require("express");
const router = express.Router();
const validate = require("../Middlewares/validationMiddleware");
const registerSchema = require("../validators/registrationValidation");
const loginSchema = require("../validators/loginValidation");
const authController = require("../controllers/authController");

router.post("/register", validate(registerSchema), authController.Register);
router.post("/login", validate(loginSchema), authController.Login);

module.exports = router;
