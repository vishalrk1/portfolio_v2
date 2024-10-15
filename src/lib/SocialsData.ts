import { GithubIcon, LinkedinIcon, LucideIcon, TwitterIcon } from "lucide-react";
import { TbBrandLeetcode } from "react-icons/tb";
import { ReactNode } from "react";
import { IconType } from "react-icons";


interface Social{
    name :string,
    icon : LucideIcon|IconType,
    url : string
}


export const SocialsData : Social[] = [

    {
        name : "Leetcode",
        icon : TbBrandLeetcode,
        url : "https://leetcode.com/rainasaxena"
    },

    {
        name : "Github",
        icon : GithubIcon,
        url : "https://github.com/rainasaxena"
    },

    {
        name : "LinkedIn",
        icon : LinkedinIcon,
        url : "https://www.linkedin.com/in/imrainasaxena/"
    },

    {
        name : "Twitter",
        icon : TwitterIcon,
        url : "https://twitter.com/Raina1Saxena"
    },

]


