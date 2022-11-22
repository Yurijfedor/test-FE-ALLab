import { JobItem } from "./jobItem";
import { Job } from "../../redux/jobsSlice";

interface Iprops {
  jobsList: Job[];
}

export const JobList: React.FC<Iprops> = ({ jobsList }) => {
  return (
    <ul className="max-w-[1400px] grid gap-2 mx-auto">
      {jobsList.map((job) => {
        return (
          <li
            key={job.id}
            className="flex bg-white-accent drop-shadow px-4 py-6 place-content-between"
          >
            <JobItem jobInfo={job} />
          </li>
        );
      })}
    </ul>
  );
};
