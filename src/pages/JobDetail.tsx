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
        <Header id={id} />
        <div className="w-full h-[1px] bg-text-accent opacity-[0.13] mix-blend-normal"></div>

        <main>
          <section className="pt-[39px]">
            <Applaybutton email={email} />
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
          <button
            className="mt-[97px] ml-[-89px] mb-[218px] w-[213px] h-[50px] bg-[#384564] bg-opacity-[0.14] flex justify-center items-center text-[] rounded-lg text-applayButton uppercase font-semibold "
            onClick={handleClick}
          >
            <FiChevronLeft />
            <span className="text-text-accent opacity-[1] z-10">
              return to job board
            </span>
          </button>
        </main>
      </section>
      <section className="max-w-{402} ml-20">
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
