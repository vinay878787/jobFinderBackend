const express = require("express");
const verifyToken = require("../Middlewares/tokenMiddleware");
const jobController = require("../controllers/jobController");
const jobValidation = require("../validators/jobValidation");
const validate = require("../Middlewares/validationMiddleware");
const router = express.Router();

router.post("/create",verifyToken,validate(jobValidation),jobController.createJob);
router.get("/details/:jobId",jobController.getJobDetailsById);
router.put("/edit/:jobId",verifyToken,validate(jobValidation),jobController.updateJobDetails);
router.get("/all",jobController.getAllJobs);

module.exports = router;

// create❌
// edit:jobID❌
// details:jobID - when u click on any post , it should fetch the data according to the clicked job post via ID❌
// all