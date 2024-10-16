import "aos/dist/aos.css";
import Particles from "../components/magicui/particles";

import { useEffect } from "react";
import Aos from "aos";
import MyInfo from "../components/sections/MyInfo";
import MyProjects from "../components/sections/MyProjects";
import MySkills from "../components/sections/MySkills";
import MyExperience from "../components/sections/MyExperience";
import ContactMe from "../components/sections/ContactMe";

function Homepage() {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  }, []);
  return (
    <div className="relative overflow-x-auto">
      <main className="flex flex-col justify-center items-center gap-10 p-7 min-h-screen">
        <MyInfo />
        <MyProjects />
        <MySkills />
        <MyExperience />
        <ContactMe />
      </main>
      <Particles
        className="overflow-hidden inset-0 -z-10 absolute"
        ease={120}
        quantity={200}
        refresh
      />
    </div>
  );
}

export default Homepage;
