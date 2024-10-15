import { SkillsData } from "../../lib/SkillsData";

const MySkills = () => {
  return (
    <section className="flex flex-col gap-10 justify-center md:min-h-max min-h-screen  md:px-40 md:py-8">
      <h1
        data-aos="fade-zoom-in"
        className="mb-10 text-white text-3xl text-center font-bold"
      >
        SKILLS
      </h1>
      <div className="w-full grid grid-cols-4 md:gap-20">
        {SkillsData.map(({ icon: Icon, name }, index) => {
          return (
            <div data-aos="fade-in-up" data-aos-delay={100 * index}>
              <div className="text-neutral-300 flex justify-center items-center h-20 w-20 rounded-full hover:bg-neutral-800 md:text-neutral-600 hover:text-white  transition duration-300 ease-in-out hover:-translate-y-2">
  <Icon className="  h-8 w-8 md:h-10 md:w-10" />
</div>

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MySkills;
