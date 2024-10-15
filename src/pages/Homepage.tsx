import {
  CheckIcon,
  ChevronRightIcon,
  Download,
  GithubIcon,
  Globe,
  Linkedin,
  Twitter,
} from "lucide-react";
import "aos/dist/aos.css";
import Particles from "../components/magicui/particles";
import WordFadeIn from "../components/magicui/word-fade-in";
import ShimmerButton from "../components/magicui/shimmer-button";
import Button from "../components/Button";
import { MagicCard } from "../components/magicui/magic-card";
import { ProjectsData } from "../lib/ProjectsData";
import { Badge } from "../components/ui/badge";

import { useEffect } from "react";
import Aos from "aos";
import { SkillsData } from "../lib/SkillsData";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
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
    <div className="relative">
      <main className="flex flex-col justify-center items-center gap-10 p-7 min-h-screen">
        <Particles
          className="inset-0 z-0 absolute"
          ease={120}
          quantity={200}
          refresh
        />
        <MyInfo/>
        <MyProjects/>
        <MySkills/>
        <MyExperience/>
        <ContactMe/>
        
      </main>
    </div>
  );
}

export default Homepage;
