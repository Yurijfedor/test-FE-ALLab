import { JobItem } from "./jobItem";
import { Job } from "../../redux/jobsSlice";

interface Iprops {
  jobsList: Job[];
}

export const JobList: React.FC<Iprops> = ({ jobsList }) => {
  return (
    <ul>
      {jobsList.map((job) => {
        return (
          <li key={job.id}>
            <JobItem jobInfo={job} />
          </li>
        );
      })}
    </ul>
  );
};
