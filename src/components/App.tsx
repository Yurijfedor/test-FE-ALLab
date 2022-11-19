import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { ContactList } from "./phonebook/contactList";
import { fetchJobs } from "../redux/operation";

export const App: React.FC = () => {
  const { jobsList, isLoading, error } = useAppSelector((state) => state.jobs);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  console.log(jobsList);

  return (
    <div>
      {isLoading && <b>Loading jobs...</b>}
      {error && <b>{error}</b>}
      <ContactList jobsList={jobsList} />;
    </div>
  );
};
