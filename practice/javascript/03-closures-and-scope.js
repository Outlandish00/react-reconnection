// Build a function called createJobTracker with these requirements:
// 1. Inside it, create a local array called jobs, initially empty.
// 2. Return an object containing two functions:
//    - addJob(job) — adds a job to the private array.
//    - getJobs() — returns the current jobs array.
// 3. Outside the function, create two separate trackers, add a different job to each, and log their contents.

const createJobTracker = () => {
  const jobs = [];

  return {
    addJob(job) {
      jobs.push(job);
    },
    getJobs() {
      return jobs;
    },
  };
};

const tracker1 = createJobTracker();
tracker1.addJob("It");
tracker1.addJob("Journeys");
tracker1.addJob("Tech Support");
console.log(tracker1.getJobs());
const tracker2 = createJobTracker();
tracker2.addJob("Astronaut");
console.log(tracker2.getJobs());
