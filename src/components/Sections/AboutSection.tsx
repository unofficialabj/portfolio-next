import UserImage from "@/assets/User";

const AboutSection = () => {
  return (
    <section className="py-10 flex flex-col lg:flex-row bg-zinc-100 text-zinc-950 gap-10 items-center  md:justify-start md:px-12 lg:px-24 ">
      <UserImage className="w-84 h-84 lg:w-[820px] lg:h-[700px] rounded-xl xl:-mt-8 " />

      <div className="w-full px-6 md:px-0 space-y-4  xl:-mt-24 h-fit">
        <p className="font-light text-[24px] md:text-2xl lg:text-3xl">
          About{" "}
          <span className="font-bold text-[24px] md:text-2xl lg:text-3xl">
            Me
          </span>
        </p>
        <div className="space-y-4 text-sm md:text-md lg:text-lg leading-relaxed text-zinc-800 text-justify">
          <p>
            I&apos;m a frontend developer passionate about building clean,
            performant, and visually engaging digital experiences using
            <span className="font-semibold text-zinc-950"> React.js </span> and
            <span className="font-semibold text-zinc-950"> Next.js</span>. My
            early journey in photography, graphic design, and video editing
            continues to shape the way I think about UI, design, and
            interaction.
          </p>

          <p>
            I&apos;ve spent the last{" "}
            <span className="font-semibold text-zinc-950">four years</span>{" "}
            working full-time as a developer—constantly learning, experimenting,
            and embracing new tools and best practices to create meaningful
            digital products.
          </p>

          <p>
            When I&apos;m not deep into code, I enjoy creating content that
            breaks down frontend concepts and inspires others entering the
            field. I also love teaching—sharing what I&apos;ve learned, guiding
            aspiring developers, and helping them build confidence through real,
            practical knowledge.
          </p>

          <p>
            And whenever I need a creative reset, you&apos;ll find me behind the
            camera—chasing light, capturing stories, and letting photography
            refresh the way I see the world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
