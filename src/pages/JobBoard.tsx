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
      <section className="2xl:pt-[29px] px-[9px] pt-[9px] pb-[17px] mx-auto max-w-[1400px] bg-[#F5F5F5] ">
        {isLoading && <b>Loading jobs...</b>}
        {error && <b>{error}</b>}
        <JobList jobsList={jobsList} />
      </section>
    </Container>
  );
};

export default JobBoard;
