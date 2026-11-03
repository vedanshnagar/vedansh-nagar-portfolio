import FadeIn from "../components/FadeIn";

const SERVICES = [
  { number: "01", name: "Languages", description: "Python, JavaScript, HTML, CSS." },
  { number: "02", name: "Frameworks & Libraries", description: "Tailwind CSS, Typed.js." },
  { number: "03", name: "Tools", description: "Git, GitHub Actions, Gradle, Vercel." },
  { number: "04", name: "Minecraft", description: "Minecraft Java, Fabric modding, modpacks and texture packs." },
  { number: "05", name: "Design & Video", description: "Illustrator, Photoshop, After Effects, Premiere Pro, Adobe Creative Suite." },
  { number: "06", name: "Community", description: "Discord server management." },
];

const ServicesSection = () => {
  return (
    <section
      id="skills"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 sm:gap-10 py-8 sm:py-10 md:py-12"
              style={{
                borderBottom:
                  i !== SERVICES.length - 1
                    ? "1px solid rgba(12, 12, 12, 0.15)"
                    : undefined,
                borderTop: i === 0 ? "1px solid rgba(12, 12, 12, 0.15)" : undefined,
              }}
            >
              <div
                className="text-[#0C0C0C] font-black flex-shrink-0"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {service.number}
              </div>
              <div className="flex flex-col gap-3 sm:gap-4 justify-center">
                <h3
                  className="text-[#0C0C0C] font-medium uppercase"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {service.name}
                </h3>
                <p
                  className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl"
                  style={{
                    fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)",
                    opacity: 0.6,
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
