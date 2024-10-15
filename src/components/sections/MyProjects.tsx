import { ProjectsData } from "../../lib/ProjectsData";
import { MagicCard } from "../magicui/magic-card";
import {GithubIcon, Globe } from "lucide-react";
import Button from "../Button";
import { Badge } from "../ui/badge";

const MyProjects = () => {
  return (
    <section className="flex flex-col gap-4 w-full h-full md:px-40 md:py-16">
      <h1 data-aos="fade-in" className="mb-10 text-white text-3xl text-center font-bold">
        {/* P<span className="text-neutral-400">rojects</span> */}
        PROJECTS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {ProjectsData.map((project, index) => {
          return (
            <div data-aos="fade-up" data-aos-delay={200 * index}>
              <MagicCard
                className="w-full h-full p-4 bg-[#171717] cursor-pointer flex flex-col gap-9 items-start rounded-md border-0 text-white "
                gradientColor="#464646"
              >
                <h1 className="text-xl font-bold">{project.title}</h1>
                <p className="my-2 text-xs line-clamp-5 text-neutral-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.skills.map((item) => {
                    return (
                      <Badge className="bg-neutral-900 text-xs font-normal text-white">
                        {item.name}
                      </Badge>
                    );
                  })}
                </div>
                <div className="mt-3 w-full flex items-center justify-end gap-3">
                  {project.livelink && (
                    <Button
                      className="gap-3 p-3 hover:bg-neutral-900"
                      onClick={() => {}}
                    >
                      <Globe size={20} />
                      <span>Live</span>
                    </Button>
                  )}

                  {project.gitlink && (
                    <Button
                      className="gap-3 p-3 hover:bg-neutral-900"
                      onClick={() => {}}
                    >
                      <GithubIcon size={20} />
                      <span>GitHub</span>
                    </Button>
                  )}
                </div>
              </MagicCard>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MyProjects;
