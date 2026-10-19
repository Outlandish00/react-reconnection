import { useEffect, useState } from "react";
import { jobArray } from "./jobs";
import { JobCards } from "./components/JobsCard";

export const JobTracker = () => {
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("saved_jobs");
    return savedJobs ? JSON.parse(savedJobs) : jobArray;
  });
  const [newJobTitle, setNewJobTitle] = useState("");
  const [newJobCompany, setNewJobCompany] = useState("");

  useEffect(() => {
    localStorage.setItem("saved_jobs", JSON.stringify(jobs));
  }, [jobs]);

  // When submitted, it should:
  // 1. Prevent the browser's default form submission.
  // 2. Create a new job object with a unique id, the title, the company, and a default status of "Applied".
  // 3. Add that job to your existing jobs state using your state setter.
  // 4. Clear the form inputs after submission.
  const handleNewJobSubmit = () => {
    const newJob = {
      id: jobs.length + 1,
      title: newJobTitle,
      company: newJobCompany,
      status: "Applied",
    };
    setJobs([...jobs, newJob]);
    setNewJobTitle("");
    setNewJobCompany("");
  };

  const handleStatusChange = (jobId, value) => {
    console.log(
      "status changed, this is the value:",
      value,
      "and this is the ID:",
      jobId,
    );
    const changedJobStatusArray = jobs.map((job) => {
      if (job.id === jobId) {
        return { ...job, status: value };
      }
      return job;
    });
    setJobs(changedJobStatusArray);
  };
  const refreshJobsInLocalStorage = () => {
    localStorage.setItem("saved_jobs", JSON.stringify(jobs));
  };
  return (
    //   In JobTracker.jsx, add a small form with:
    // - A text input for the job title
    // - A text input for the company name
    // - A submit button
    <>
      <form>
        <input
          name="jobTitle"
          value={newJobTitle}
          onChange={(event) => setNewJobTitle(event.target.value)}
        />
        <input
          name="jobCompany"
          value={newJobCompany}
          onChange={(event) => setNewJobCompany(event.target.value)}
        />
        <button
          name="submitNewJob"
          onClick={(event) => {
            event.preventDefault();
            handleNewJobSubmit();
          }}
        >
          Submit
        </button>
      </form>
      {jobs.map((job) => {
        return (
          <JobCards
            handleStatusChange={handleStatusChange}
            id={job.id}
            job={job}
          />
        );
      })}
      <button onClick={refreshJobsInLocalStorage}>Refresh jobs</button>
    </>
  );
};
