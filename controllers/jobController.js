const Job = require("../models/jobModel");

const getAllJobs = async (req, res, next) => {
  try {
    const data = await Job.find({});
    console.log(data);
    res.status(200).json({ message: data });
  } catch (error) {
    next(error);
  }
};

const createJob = async (req, res, next) => {
  try {
    console.log(req.body);
    const jobData = await Job.create(req.body);
    res.status(200).json({ message: `job created : ${jobData}` });
  } catch (error) {
    next(error);
  }
};

const getJobDetailsById = async (req, res, next) => {
  try {
    const jobId = req.params.jobId;
    if (!jobId) {
      return res.status(404).json({ message: "wrong job ID" });
    }
    const jobDetails = await Job.find({ _id: jobId });
    // const jobDetails = await Job.findById(jobId);
    res.status(200).json({ message: "job details : ", jobDetails });
  } catch (error) {
    next(error);
  }
};

const updateJobDetails = async (req, res, next) => {
  try {
    const jobId = req.params.jobId;
    const {
      companyName,
      title,
      jobType,
      salary,
      jobStyle,
      location,
      jobDescription,
      about,
      skills,
      additionalInformation,
      duration,
    } = req.body;

    const updateJobDetails = await Job.updateOne(
      { _id: jobId },
      {
        $set: {
          companyName,
          title,
          jobType,
          salary,
          jobStyle,
          location,
          jobDescription,
          about,
          skills,
          additionalInformation,
          duration,
        },
      }
    );
    res.status(200).json({ message: "Job details updated successfully" });
  } catch (error) {
    next(error);
  }
};
module.exports = { getAllJobs, createJob, getJobDetailsById, updateJobDetails };
