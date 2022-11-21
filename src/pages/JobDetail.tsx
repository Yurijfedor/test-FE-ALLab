/* eslint-disable no-useless-concat */
import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { Applaybutton } from "../components/applayButton";
import { Header } from "../components/headerDetail";
import { Description } from "../components/description";
import { AdditInfo } from "../components/additInfo";
import { FiChevronLeft } from "react-icons/fi";

const JobDetail: React.FC = () => {
  const { jobsList } = useAppSelector((state) => state.jobs);
  const { jobBoardId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const jobItem: any = jobsList.find(({ id }) => id === jobBoardId);

  const handleClick = () => {
    navigate(location?.state?.from ?? "/");
  };

  const {
    email,
    id,
    title,
    salary,
    createdAt,
    description,
    employment_type,
    benefits,
    pictures,
  } = jobItem;
  return (
    <>
      <Header id={id} />

      <main>
        <section>
          <Applaybutton email={email} />;
          <Description
            title={title}
            salary={salary}
            postedDate={createdAt}
            description={description}
          />
          <Applaybutton email={email} />
        </section>
        <section>
          <AdditInfo
            employmentType={employment_type}
            benefits={benefits}
            pictures={pictures}
            title={title}
          />
        </section>
        <button onClick={handleClick}>
          <FiChevronLeft />
          RETURN TO JOB BOARD
        </button>
      </main>
    </>
  );
};

export default JobDetail;
