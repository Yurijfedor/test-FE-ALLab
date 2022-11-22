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
    <>
      <div className="flex gap-[26px]">
        <ImgStyled src={pictures[0]} alt={name} />
        <div>
          <Link
            className="text-salary tracking-[-0.625px] text-text-accent order-1 grow-0 flex-none"
            to={{ pathname: `/job/${id}` }}
          >
            {title}
          </Link>
          <p className="text-p2 font-normal tracking-[0.23619px] text-[#878D9D] self-stretch order-2 grow-0 flex-none">
            {"Department name" +
              " " +
              String.fromCharCode(183) +
              " " +
              `${name}`}
          </p>

          <p className="flex items-center gap-2 text-p2 font-normal tracking-[0.23619px] text-[#878D9D]">
            <ImLocation /> {address}
          </p>
        </div>
      </div>
      <div className="flex gap-[32px]">
        <ul className="flex items-center ">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </ul>
        <div className="grid content-between justify-items-end place-content-end">
          <IsFavorite id={id} />
          <PostedAt createdAt={createdAt} />
        </div>
      </div>
    </>
  );
};
