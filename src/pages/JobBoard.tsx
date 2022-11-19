import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { fetchJobs } from "../redux/operation";
import { JobList } from "../components/jobBoard/jobList";

const JobBoard: React.FC = () => {
  const { jobsList, isLoading, error } = useAppSelector((state) => state.jobs);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchJobs());
  }, []);

  return (
    <div>
      {isLoading && <b>Loading jobs...</b>}
      {error && <b>{error}</b>}
      <JobList jobsList={jobsList} />;
    </div>
  );
};

export default JobBoard;
