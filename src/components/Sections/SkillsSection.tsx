import {
  FaAngular,
  FaFigma,
  FaGitAlt,
  FaNode,
  FaPython,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiJira, SiTypescript } from "react-icons/si";

const skills = [
  {
    icon: <FaReact />,
    name: "React",
  },
  {
    icon: <RiNextjsFill />,
    name: "Next",
  },
  { icon: <FaVuejs />, name: "Vue" },
  { icon: <FaAngular />, name: "Angular" },

  {
    icon: <SiTypescript />,
    name: "Typescript",
  },
  { icon: <RiTailwindCssFill />, name: "Tailwind" },
  { icon: <GrGraphQl />, name: "GraphQL" },
  { icon: <FaNode />, name: "Node" },
  { icon: <FaPython />, name: "Python" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <SiJira />, name: "Jira" },
  { icon: <FaFigma />, name: "Figma" },
];

const SkillsSection = () => {
  return (
    <section className="bg-zinc-100 py-10 text-zinc-950">
      <p className="font-light text-[24px] md:text-2xl lg:text-3xl text-center">
        My{" "}
        <span className="font-bold text-[24px] md:text-2xl lg:text-3xl">
          Skills{" "}
        </span>
      </p>
      <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6 px-12 py-10">
        {skills?.map((skill, index) => (
          <div
            key={index}
            className="border-2 hover:bg-black hover:text-white w-full aspect-square grid gap-4 place-items-center py-4 md:py-10  cursor-pointer transition-colors">
            <div className="text-4xl lg:text-5xl ">{skill.icon}</div>
            <div className="text-[15px] md:text-xl lg:text-2xl font-semibold">
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
