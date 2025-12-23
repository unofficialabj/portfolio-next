const experiences = [
  {
    start: "Feb, 2025",
    end: null,
    companyName: "BCEPS",
    position: "Web Developer",
    description:
      "I build scalable, high-performance front-end applications using Next.js, create reusable and accessible UI components, convert Figma designs into pixel-perfect interfaces, integrate REST APIs with DRF/Python, manage state with Redux Toolkit/Zustand, and ensure responsive, optimized performance—all while collaborating effectively in Agile teams.",
  },
  {
    start: "Nov, 2022",
    end: null,
    companyName: "Code Himalaya",
    position: "React Developer",
    description:
      "I developed and maintained scalable front-end applications using React.js and Next.js, build optimized reusable UI components, and integrate RESTful APIs and Neo4j GraphDB via GraphQL. I create responsive, accessible interfaces using modern CSS frameworks and UI libraries, manage state with Redux, Zustand, or Context API, and ensure strong performance, cross-browser compatibility, and adherence to best practices. I document systems, collaborate in Agile environments, meet project deadlines, and support team management and interviews.",
  },
  {
    start: "Sept, 2023",
    end: "July, 2024",
    companyName: "Mediaholic Nepal",
    position: "Software Engineer",
    description:
      "I build and maintain responsive web and mobile interfaces using React.js and React Native, create reusable UI components, integrate APIs, manage state with Context API or Redux, debug and optimize performance, and follow modern best practices to ensure smooth, compatible user experiences across devices.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-10 ">
      <p className="font-light text-[24px] md:text-2xl lg:text-3xl text-center">
        My{" "}
        <span className="font-bold text-[24px] md:text-2xl lg:text-3xl">
          Experience{" "}
        </span>
      </p>
      <div className="grid  gap-6 px-12 py-10">
        {experiences?.map((item, index) => (
          <div
            key={index}
            className="border-2 border-zinc-600 rounded-md hover:bg-zinc-800 p-6 grid gap-3 transition-colors cursor-pointer">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="text-lg md:text-xl">
                <span className="font-semibold">{item.position}</span> at{" "}
                <span className="font-semibold">{item.companyName}</span>
              </div>
              <div className="text-md md:text-lg">
                {item.start} - {item.end ?? "Present"}
              </div>
            </div>
            <div className="text-justify text-zinc-300 text-sm md:text-md lg:text-lg leading-relaxed">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
