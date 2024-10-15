import React from "react";
import { Experience } from "../../lib/ExperienceData";
import dayjs from "dayjs";

interface ExperienceCardProp {
  data: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProp> = ({ data }) => {
  return (
    <div className="md:px-8 w-full flex flex-col md:flex-row items-start gap-2">
      <div className="flex items-start gap-3 md:hidden">
        <img
          className="mr-3 md:mb-3 md:mr-0 h-14 w-14 object-cover"
          src={data.logo}
          alt={data.company_name}
        />

        <div className="flex flex-col gap-1 items-start justify-center">
          <h1 className=" font-bold text-lg text-white">{data.position}</h1>
          <h1 className=" font-bold text-md text-white">{data.company_name}</h1>
          <p className="text-sm text-neutral-200">{data.location}</p>
          <div className="text-xs font-semibold flex gap-2">
            <p className="text-white">{`${dayjs(data.start_date).format(
              "MMM YYYY"
            )}`}</p>
            <p>•</p>
            <p className="text-white">{`${
              data.is_current
                ? "Present"
                : dayjs(data.end_date).format("MMM YYYY")
            }`}</p>
          </div>
        </div>
      </div>
      <div className="hidden md:flex p-4 px-0 md:px-6 flex-2 md:flex-col flex-row gap-1 items-center">
        <img
          className="mr-3 md:mb-3 md:mr-0 h-24 w-24 object-cover"
          src={data.logo}
          alt={data.company_name}
        />
        <div className="flex flex-col gap-2">
          <p className="text-white">{`From : ${dayjs(data.start_date).format(
            "MMM YYYY"
          )}`}</p>
          <p className="text-white">{`To : ${
            data.is_current
              ? "Present"
              : dayjs(data.end_date).format("MMM YYYY")
          }`}</p>
        </div>
      </div>
      <div className="hidden md:flex gap-1 flex-1 flex-col h-full">
        <h1 className="ml-3 font-bold text-2xl text-white">{data.position}</h1>
        <h1 className="ml-3 font-bold text-xl text-white">
          {data.company_name}
        </h1>
        <p className="ml-3 text-base text-neutral-200">{data.location}</p>

        <ul className="flex flex-col gap-3 space-y-2 mx-3 list-disc">
          {data.description.map((text) => {
            return <li className="text-justify text-neutral-400">{text}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
