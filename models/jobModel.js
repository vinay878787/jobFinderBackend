const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
 companyName : {
    type:String,
    required:true,
 },
 title : {
    type:String,
    required:true,
 },
 jobType : {
    type:String,
    required:true,
 },
 salary : {
    type:String,
    required:true,
 },
 jobStyle : {
    type:String,
 },
 location : {
    type:String,
 },
 jobDescription : {
    type:String,
    required:true,
 },
 about : {
    type:String,
    required:true,
 },
 skills : {
    type:Array,
    required:true,
 },
 additionalInformation : {
    type:String,
 },
 duration : {
    type:String,
 }
});

const Job = mongoose.model("Job",jobSchema);
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