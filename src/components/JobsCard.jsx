export const JobCards = ({ job, handleStatusChange }) => {
  return (
    <div>
      <h1>{job.title}</h1>
      <h2>{job.company}</h2>
      <select
        name="statusDropdown"
        defaultValue={job.status}
        onChange={(event) => {
          handleStatusChange(job.id, event.target.value);
        }}
      >
        <option value="Applied">Applied</option>
        <option value="Interviewing">Interviewing</option>
        <option value="Rejected">Rejected</option>
        <option value="Offer">Offer</option>
      </select>
    </div>
  );
};
