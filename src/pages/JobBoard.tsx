import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { fetchJobs } from "../redux/operation";
import { JobList } from "../components/jobBoard/jobList";
import { Container } from "../components/container";

const JobBoard: React.FC = () => {
  const { jobsList, isLoading, error } = useAppSelector((state) => state.jobs);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchJobs());
  }, []);

  return (
    <Container>
      <section className="pt-[29px]">
        {isLoading && <b>Loading jobs...</b>}
        {error && <b>{error}</b>}
        <JobList jobsList={jobsList} />;
      </section>
    </Container>
  );
};

export default JobBoard;
