/* eslint-disable no-useless-concat */
import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useJsApiLoader } from "@react-google-maps/api";

import { useAppSelector } from "../redux/hooks";
import { Applaybutton } from "../components/applayButton";
import { Header } from "../components/headerDetail";
import { Description } from "../components/description";
import { AdditInfo } from "../components/additInfo";
import { FiChevronLeft } from "react-icons/fi";
import { Map } from "../components/map";
import { Container } from "../components/container";
import { MapInfo } from "../components/mapInfo";
import { AttImages } from "../components/attImages";

const API_KEY = process.env.REACT_APP_API_KEY;

const JobDetail: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  const { jobsList } = useAppSelector((state) => state.jobs);
  const { jobBoardId } = useParams();
  const locationUrl = useLocation();
  const navigate = useNavigate();
  const jobItem: any = jobsList.find(({ id }) => id === jobBoardId);

  const availableScreenWidth = window.screen.availWidth;

  const handleClick = () => {
    navigate(locationUrl?.state?.from ?? "/");
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
    location,
    name,
    address,
    phone,
  } = jobItem;
  return (
    <Container>
      <section className="max-w-[774px] bg-white-accent">
        <Header id={id} width={availableScreenWidth} />
        <div className="sm:hidden 2xl:flex w-full h-[1px] bg-text-accent opacity-[0.13] mix-blend-normal"></div>
        <section className="pt-[39px] pb-[135px]">
          {availableScreenWidth > 1920 && <Applaybutton email={email} />}

          <Description
            title={title}
            salary={salary}
            postedDate={createdAt}
            description={description}
          />
          <Applaybutton email={email} />
        </section>
        <section className="flex flex-col gap-[63px]">
          <AttImages pictures={pictures} name={name} />
          <AdditInfo employmentType={employment_type} benefits={benefits} />
        </section>

        <button
          className="hidden 2xl:flex justify-center items-center mt-[97px] ml-[-89px] 2xl:mb-[218px] w-[213px] h-[50px] bg-[#384564] bg-opacity-[0.14] text-[] rounded-lg text-applayButton uppercase font-semibold "
          onClick={handleClick}
        >
          <FiChevronLeft />
          <span className="text-text-accent opacity-[1] z-10">
            return to job board
          </span>
        </button>
      </section>
      <section className="max-w-{402} 2xl:ml-20">
        <h3 className="2xl:hidden text-logo font-bold tracking-0.413333px text-text-accent w-full mb-[9px]">
          Contact
        </h3>
        <div className="2xl:hidden w-full h-[1px] bg-text-accent opacity-[0.13] mix-blend-normal mb-[21px]"></div>
        <div className="relative w-[402px] h-[218px] bg-[#2A3047] overflow-hidden">
          <div className="grid gap-[8px] pt-[31px] pl-[62px] ">
            <MapInfo text={name} isName={true} />
            <MapInfo text={address} location={true} />
            <MapInfo text={phone} />
            <MapInfo text={email} />
          </div>

          <div className="w-[273px] h-[273px] rounded-[50%] absolute top-[-12px] left-[-77px] bg-[#202336]"></div>
        </div>
        {isLoaded ? (
          <Map lat={location.lat} long={location.long} />
        ) : (
          <h2>Loading</h2>
        )}
      </section>
    </Container>
  );
};

export default JobDetail;
