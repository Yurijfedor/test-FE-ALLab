/* eslint-disable no-useless-concat */
import React from "react";
import { Link } from "react-router-dom";
import { Job } from "../../redux/jobsSlice";
import { IsFavorite } from "../isFavorite";
import { PostedAt } from "../posted";
import { ImgStyled } from "./contactForm.styled";
import { ImLocation } from "react-icons/im";
import { FaStar } from "react-icons/fa";

interface IProps {
  jobInfo: Job;
}

export const JobItem: React.FC<IProps> = ({
  jobInfo: { name, pictures, title, address, createdAt, id },
}) => {
  return (
    <div>
      <ImgStyled src={pictures[0]} alt={name} />
      <div>
        <Link to={{ pathname: `/job/${id}` }}>{title}</Link>
        <p>
          {"Department name" + " " + String.fromCharCode(183) + " " + `${name}`}
        </p>
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

        <PostedAt createdAt={createdAt} />
      </div>
    </div>
  );
};
