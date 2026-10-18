const jobs = [
  { title: "Frontend Developer", status: "Applied" },
  { title: "IT Support", status: "Interviewing" },
  { title: "React Developer", status: "Applied" },
  { title: "QA Tester", status: "Rejected" },
  { title: "Junior Web Developer", status: "Interviewing" },
];

// Create a function named createJobMessage that accepts two parameters:
// - title — the job title
// - status — the application's current status
// It should return a message in this format:
// Your application for Frontend Developer is currently Applied.
// Try calling it with different job titles and statuses, then print the returned messages.

const createJobMessage = (title, status) => {
  return `Your application for ${title} is currently ${status}.`;
};

// console.log(createJobMessage("IT Support", "Applied"));
// console.log(createJobMessage("Your Actual Dream Job", "Rejected"));

// const getJobTitle = (job) => {
//   return job.title;
// };

// const printJobTitle = (job) => {
//   console.log(job.title);
// };

// In your own words, explain what's the difference between calling these two functions? Specifically, what does each one give back to the code that called it?

// The getJobTitle function returns a string which can be used in different parts of the project. The printJobTitle simply prints the job title to the console, returning undefined to the caller.

// Your task is to create a new function called getJobSummary(job) that:
// 1. Accepts a single job object, such as { title: "IT Support", status: "Applied" }.
// 2. Uses createJobMessage() to generate the message.
// 3. Returns that message instead of printing it.
// Then call your new function with a job object and use console.log() on the result.

const getJobSummary = (job) => {
  if (job && job.title && job.status) {
    const message = createJobMessage(job.title, job.status);
    return message;
  } else {
    return "Not a valid object or is missing properties";
  }
};

// console.log(getJobSummary({ title: "IT Support", status: "Interviewing" }));

// Suppose you want to generate summaries for all the jobs in your jobs array, rather than just one job.
// How would you combine them to produce a new array of summary strings, one for each job?
const jobSummaries = jobs.map((job) => getJobSummary(job));
console.log(jobSummaries);

// Create a function called createJob that accepts two parameters:
// - title — required.
// - status — defaults to "Applied" if no status is provided.
// The function should return a new object with those two properties.
const createJob = (title, status = "Applied") => {
  const newJob = { title: title, status: status };

  return newJob;
};

// Create a function called addJob that accepts:
// - jobs — an existing array of jobs.
// - newJob — a job object to add.
const addJob = (jobs, newJob) => {
  const newArray = [...jobs, newJob];
  return newArray;
};

console.log(addJob(jobs, { title: "Janitor", status: "Applied" }));
console.log(jobs);
// Write a function called addJobWithDefaults that:
// 1. Accepts an existing jobs array, a title, and an optional status that defaults to "Applied".
// 2. Uses your existing createJob() function to create the new job object.
// 3. Uses your existing addJob() function to return the updated array.
const addJobWithDefaults = (jobArray, title, status = "Applied") => {
  const newJob = createJob(title, status);
  const newArray = [...jobArray, newJob];
  return newArray;
};

console.log(
  "Add job with defaults:",
  addJobWithDefaults(jobs, "Frontend Developer"),
);
