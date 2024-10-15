import JioLogo from "../assets/jio-logo.png";

export interface Experience {
  company_name: string;
  position : string;
  start_date: string;
  end_date: string;
  location: string;
  description: string[];
  logo: string;
  is_current: boolean;
}

export const ExperienceData : Experience[] = [
  {
    company_name: "Jio Platforms Ltd.",
    position : "Intern Software Development Engineer",
    start_date: "07-08-2023",
    end_date: "11-11-2023",
    location: "Navi Mumbai, Maharashtra",
    description: [
      `JioGamesCloud : Utilized Google Lighthouse and PWA Builder to improve website visibility and search
engine ranking. Analyzed website performance, provided recommendations for enhancing speed and
responsiveness. Contributed creative ideas and implemented improvements for user interface and
experience. Developed skills in ReactJS, NextJS, and Django while completing custom web
development projects.`,

      `JioKrishi : Contributed to the website's translation initiative, ensuring global accessibility for agricultural
enthusiasts. Engaging in component designing and development, I enhanced user interfaces, making
information more intuitive for farmers`,
    ],
    logo: JioLogo,
    is_current: false,
  },
];
