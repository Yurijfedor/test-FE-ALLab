import React from "react";
import { Link } from "react-router-dom";
import { Job } from "../../redux/jobsSlice";
import { IsFavorite } from "../isFavorite";
import { ImgStyled } from "./contactForm.styled";
import { ImLocation } from "react-icons/im";
import { FaStar } from "react-icons/fa";

interface IProps {
  jobInfo: Job;
}

export const JobItem: React.FC<IProps> = ({
  jobInfo: { name, pictures, title, address, createdAt, id },
}) => {
  const date = createdAt;
  const currentDate = Date.parse(new Date().toString());
  const days = (currentDate - Date.parse(date)) / 86400000;

  return (
    <div>
      <ImgStyled src={pictures[0]} alt={name} />
      <div>
        <Link to={{ pathname: `/job/${id}` }}>{title}</Link>
        <p>{`Department name - ${name} `}</p>
        <ImLocation />
        <p>{address}</p>
      </div>
      <ul>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </ul>
      <div>
        <IsFavorite id={id} />

        <p>{`Posted ${Math.round(days)} days ago`}</p>
      </div>
    </div>
  );
};
