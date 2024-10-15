import { TbBrandCpp } from "react-icons/tb";
import { Skill } from "./Types";
import { FaCss3Alt, FaGitAlt, FaHtml5, FaPython, FaReact, FaSass } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { SiDjango, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

export const SkillsData: Skill[] = [
    {
        name: "C/C++",
        icon : TbBrandCpp
    },
    {
        name: "Python",
        icon : FaPython
    },
    {
        name: "TypeScript",
        icon : SiTypescript

    },
    {
        name: "JavaScript",
        icon : IoLogoJavascript

    },
    {
        name: "ReactJS",
        icon :  FaReact
    },
    {
        name: "Django",
        icon : SiDjango
    },
    {
        name: "SQL",
        icon : GrMysql
    },

    {
        name: "HTML",
        icon : FaHtml5
    },
    {
        name: "CSS",
        icon : FaCss3Alt
    },
    {
        name: "SCSS",
        icon : FaSass
    },
    {
        name: "Tailwind CSS",
        icon : RiTailwindCssFill
    },

    {
        name : "Git",
        icon : FaGitAlt
    }
      
];
