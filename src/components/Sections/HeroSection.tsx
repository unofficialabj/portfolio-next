import HeroImage from "@/assets/Hero";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:px-12 lg:px-24 md:-mt-32 lg:-mt-16">
      <HeroImage className="w-84 h-84 md:w-[824px] md:h-[824px]" />
      <div className="w-full px-6 md:px-0 grid gap-0.5 md:gap-1 lg:gap-3">
        <p className="font-extralight text-xl lg:text-4xl">
          Hi, I am{" "}
          <span className="font-bold text-[24px] md:text-2xl lg:text-5xl">
            Anish Bhakta Joshi.
          </span>
        </p>
        <p className="text-[24px] md:text-2xl lg:text-5xl font-extrabold">
          Frontend{" "}
          <span className="text-transparent text-stroke">Developer</span>
        </p>
        <p className="font-extralight text-[24px] md:text-2xl lg:text-4xl">
          Based in{" "}
          <span className="font-bold text-[24px] md:text-2xl lg:text-5xl">
            Nepal.
          </span>
        </p>
        <div className="py-8 md:py-14 leading-relaxed">
          <p className="text-sm md:text-md lg:text-lg text-zinc-400 mb-4">
            Blending <span className="font-semibold">creativity</span> and{" "}
            <span className="font-semibold">technology</span>, I craft{" "}
            <span className="font-semibold text-zinc-200">
              interactive user experiences{" "}
            </span>
            through{" "}
            <span className="font-semibold text-zinc-200">clean code</span> and{" "}
            <span className="font-semibold text-zinc-200">
              captivating visuals
            </span>
            .
          </p>

          <p className="text-sm md:text-md lg:text-lg text-zinc-400">
            I also{" "}
            <span className="font-semibold text-zinc-200">
              create content about coding
            </span>
            —sharing knowledge while building engaging interfaces.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HeroSection;
