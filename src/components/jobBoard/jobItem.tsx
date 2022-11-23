/* eslint-disable no-useless-concat */
import React from "react";
import { Link } from "react-router-dom";
import { Job } from "../../redux/jobsSlice";
import { IsFavorite } from "../isFavorite";
import { PostedAt } from "../posted";
import { ImLocation } from "react-icons/im";
import { FaStar } from "react-icons/fa";

interface IProps {
  jobInfo: Job;
}

export const JobItem: React.FC<IProps> = ({
  jobInfo: { name, pictures, title, address, createdAt, id },
}) => {
  return (
    <div className="flex gap-[19px] 2xl:gap-[26px] 2xl:grow">
      <img
        className="2xl:w-[85px] 2xl:h-[85px] order-1 w-[66px] h-[66px] rounded-full mt-[45px] 2xl:mt-[24px]"
        src={pictures[0]}
        alt={name}
      />
      <div className="flex w-[95%] flex-col  2xl:flex-row-reverse 2xl:justify-between order-2">
        <div className="flex gap-[32px] justify-between">
          <ul className="flex items-center ">
            {window.screen.availWidth > 1920 ? (
              <FaStar />
            ) : (
              <FaStar size={"10px"} />
            )}
            {window.screen.availWidth > 1920 ? (
              <FaStar />
            ) : (
              <FaStar size={"10px"} />
            )}

            {window.screen.availWidth > 1920 ? (
              <FaStar />
            ) : (
              <FaStar size={"10px"} />
            )}

            {window.screen.availWidth > 1920 ? (
              <FaStar />
            ) : (
              <FaStar size={"10px"} />
            )}

            {window.screen.availWidth > 1920 ? (
              <FaStar />
            ) : (
              <FaStar size={"10px"} />
            )}
          </ul>
          <div className="grid content-between justify-items-end place-content-end">
            {window.screen.availWidth > 1920 && <IsFavorite id={id} />}

            <PostedAt createdAt={createdAt} />
          </div>
        </div>
        <div>
          <Link
            className="2xl:text-salary text-lg 2xl:font-bold font-normal tracking-[-0.625px] text-text-accent order-1 grow-0 flex-none"
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
    </div>
  );
};
