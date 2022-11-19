import React from "react";
import { useParams } from "react-router-dom";
import { IsFavorite } from "../components/isFavorite";
import { BsFillShareFill } from "react-icons/bs";
import { useAppSelector } from "../redux/hooks";

const JobDetail: React.FC = () => {
  const { jobsList } = useAppSelector((state) => state.jobs);
  const { jobBoardId } = useParams();

  const jobItem: any = jobsList.find(({ id }) => id === jobBoardId);
  const { email, id } = jobItem;

  return (
    <>
      <header>
        <h2>Job Details</h2>
        <div>
          <IsFavorite id={id} />
          <p>Save to my list</p>
          <BsFillShareFill />
          <p>Share</p>
        </div>
      </header>

      <main>
        <a href={`mailto:${email}`}>Apply now</a>;
      </main>
    </>
  );
};

export default JobDetail;
