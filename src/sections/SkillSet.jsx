import HoverCard from "../components/HoverCard";

const skillSet = [
  {
    name: "React Js",
    image: "/skills/React.png",
  },
  {
    name: "Next Js",
    image: "/skills/Next.js.svg",
  },
  {
    name: "Tailwind",
    image: "/skills/Tailwind CSS.svg",
  },
  {
    name: "GitHub",
    image: "/skills/GitHub.svg",
  },
  {
    name: "NPM",
    image: "/skills/NPM.svg",
  },
  {
    name: "Javascript",
    image: "/skills/JavaScript.svg",
  },
  {
    name: "Java",
    image: "/skills/Java.svg",
  },
  {
    name: "Postman",
    image: "/skills/Postman.svg",
  },
  {
    name: "TypeScript",
    image: "/skills/TypeScript.svg",
  },
  {
    name: "Figma",
    image: "/skills/Figma.svg",
  },
];

const SkillSet = () => {
  return (
    <>
      {/*Skills  */}
      <section
        id="skills"
        className="container mx-auto py-15 md:py-15 animate-fade-in animation-delay-600"
      >
        <div className="py-15 md:py-30 animate-fade-in animation-delay-600">
          <p className=" text-primary-foreground space-y-10 mb-6 text-center md:text-4xl">
            <span className="text-primary font-serif italic font-normal text-2xl md:text-6xl">
              Technologies
            </span>{" "}
            I work with
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 place-items-center">
            {skillSet.map((skill, idx) => (
              <HoverCard key={idx} name={skill.name} image={skill.image} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillSet;
