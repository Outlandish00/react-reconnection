const jobs = [
  { title: "Frontend Developer", status: "Applied" },
  { title: "IT Support", status: "Interviewing" },
  { title: "React Developer", status: "Applied" },
  { title: "QA Tester", status: "Rejected" },
  { title: "Junior Web Developer", status: "Interviewing" },
];

// Create a variable called totalJobs that stores the number of applications in the array. Print it to the console.
const totalJobs = jobs.length;

// Create a new array called interviewingJobs containing only jobs whose status is "Interviewing".
// Print the titles of those jobs to the console.
const interviewingJobs = jobs.filter((job) => job.status === "Interviewing");
interviewingJobs.map((job) => {});

// Create a variable called appliedCount that stores how many applications have the status "Applied".
const appliedCount = jobs.filter((job) => job.status === "Applied").length;

// Imagine the IT Support application has moved from "Interviewing" to "Rejected".
// Without changing the original jobs array, create a new array called updatedJobs in which only the IT Support application's status has changed.
const updatedJobs = jobs.map((job) => {
  if (job.title === "IT Support") {
    const rejectedJob = { ...job, status: "Rejected" };
    return rejectedJob;
  }
  return job;
});

// Using the original jobs array, create a new array named activeJobs that contains every job except those whose status is "Rejected".

const activeJobs = jobs.filter((job) => job.status != "Rejected");
activeJobs.forEach((job) => console.log(job.title));

// Create an object named jobStats that stores these three counts:
// - applied: number of jobs with status "Applied"
// - interviewing: number with status "Interviewing"
// - rejected: number with status "Rejected"

const getJobStats = (array) => {
  const jobStats = {
    applied: 0,
    interviewing: 0,
    rejected: 0,
    offer: 0,
    total: 0,
  };
  jobStats.applied = array.filter((job) => job.status === "Applied").length;
  jobStats.interviewing = array.filter(
    (job) => job.status === "Interviewing",
  ).length;
  jobStats.rejected = array.filter((job) => job.status === "Rejected").length;
  jobStats.offer = array.filter((job) => job.status === "Offer").length;
  jobStats.total = array.length;

  return jobStats;
};
console.log(getJobStats([]));
