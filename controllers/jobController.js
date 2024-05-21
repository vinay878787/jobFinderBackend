const Job = require("../models/jobModel");

const getAllJobs = async (req, res, next) => {
  try {
    const title = req.query.title || "";
    const skills = req.query.skills;
    console.log("title", title, "skills", skills);
    let filter = {};
    let formattedSkills;
    if (skills) {
      formattedSkills = skills.split(",");
      if (formattedSkills) {
        const regexArray = formattedSkills.map(
          (value) => new RegExp(value, "i")
        );
        console.log(regexArray);

        filter = {
          skills: { $in: regexArray },
        };
      }
    }

    const jobList = await Job.find(
      {
        jobTitle: { $regex: title, $options: "i" },
        ...filter,
      },
      {
        title: 1,
        salary: 1,
        logo: 1,
        location: 1,
        skills: 1,
        company: 1,
        jobType: 1,
        jobTitle: 1,
        jobStyle: 1,
      }
    );
    console.log("job List : ", jobList);
    res.status(200).json({ message: jobList });
  } catch (error) {
    next(error);
  }
};

const createJob = async (req, res, next) => {
  try {
    console.log("create API1", req.body);
    const jobData = await Job.create(req.body);
    res.status(200).json({ message: jobData });
  } catch (error) {
    next(error);
  }
};

const getJobDetailsById = async (req, res, next) => {
  try {
    const jobId = await req.params.jobId;
    console.log("job ID : ", jobId);
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
    console.log("JOB ID FROM EDIT JOB", jobId);
    const {
      company,
      logo,
      jobTitle,
      salary,
      jobType,
      jobStyle,
      location,
      description,
      about,
      skills,
      additionalInformation,
    } = req.body;

    const updatedJobDetails = await Job.findByIdAndUpdate(
      jobId,
      {
        company,
        logo,
        jobTitle,
        salary,
        jobType,
        jobStyle,
        location,
        description,
        about,
        skills,
        additionalInformation,
      },
      { new: true }
    );
    console.log(updatedJobDetails);
    res
      .status(200)
      .json({ message: "Job details updated successfully", updatedJobDetails });
  } catch (error) {
    next(error);
  }
};
module.exports = { getAllJobs, createJob, getJobDetailsById, updateJobDetails };
