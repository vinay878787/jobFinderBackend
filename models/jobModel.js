const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
  },
  jobStyle: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
  additionalInformation: {
    type: String,
  },
},{timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }});

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
// company name
// logo url
// job positionn || title
// montly salary
// job type // intern , full time  ---->dropdown
// jobStyle = remote / office  ---->dropdown
// location
// job description
// about company
// skills required // ----> array
// additional informations
// duration
