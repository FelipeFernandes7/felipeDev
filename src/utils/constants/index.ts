import { IconType } from "react-icons";
import * as Fa from "react-icons/fa";
import * as Si from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";

export interface StacksType {
  id: string;
  label: string;
  icon: IconType;
}

export const stacks: StacksType[] = [
  {
    id: "1",
    icon: Si.SiTypescript,
    label: "Typescript",
  },
  {
    id: "2",
    icon: Si.SiJavascript,
    label: "Javascript",
  },
  {
    id: "3",
    icon: Fa.FaNodeJs,
    label: "NodeJs",
  },
  {
    id: "4",
    icon: Si.SiExpress,
    label: "Express",
  },
  {
    id: "5",
    icon: Si.SiPrisma,
    label: "Prisma",
  },
  {
    id: "6",
    icon: Si.SiMysql,
    label: "Mysql",
  },
  {
    id: "7",
    icon: Si.SiPostgresql,
    label: "Postgresql",
  },
  {
    id: "8",
    icon: Si.SiGit,
    label: "Git",
  },
  {
    id: "9",
    icon: Si.SiGithub,
    label: "Github",
  },

  {
    id: "10",
    icon: Fa.FaBitbucket,
    label: "Bitbucket",
  },
  {
    id: "12",
    icon: Si.SiVercel,
    label: "Vercel",
  },
  {
    id: "13",
    icon: Fa.FaReact,
    label: "React",
  },
  {
    id: "14",
    icon: Si.SiNextdotjs,
    label: "NextJs",
  },
  {
    id: "15",
    icon: TbBrandVite,
    label: "Vite",
  },
  {
    id: "16",
    icon: Fa.FaSass,
    label: "Sass",
  },
  {
    id: "17",
    icon: Si.SiStyledcomponents,
    label: "Styled-Components",
  },
  {
    id: "18",
    icon: Si.SiTailwindcss,
    label: "Tailwind",
  },
  {
    id: "19",
    icon: Fa.FaCss3,
    label: "Css",
  },
  {
    id: "20",
    icon: Fa.FaHtml5,
    label: "Html",
  },
  {
    id: "21",
    icon: Si.SiFigma,
    label: "Figma",
  },
];
