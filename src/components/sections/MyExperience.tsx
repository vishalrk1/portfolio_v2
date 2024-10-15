import { ExperienceData } from "../../lib/ExperienceData";
import ExperienceCard from "../cards/ExperienceCard";

const MyExperience = () => {
  return (
    <section className="w-full flex flex-col gap-10 md:min-h-screen md:justify-center md:px-40 md:py-8">
      <h1 data-aos="fade-zoom-in" className="text-white text-3xl text-center font-bold">
        EXPERIENCE
      </h1>

      <div className="mb-32 md:mb-0 flex flex-col w-full h-max p-2">
        {
            ExperienceData.map((item)=>{
                return(
                    <ExperienceCard data={item}/>
                )
            })
        }
      </div>
    </section>
  );
};

export default MyExperience;
