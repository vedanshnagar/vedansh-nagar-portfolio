import FadeIn from "../components/FadeIn";

const RESUME_URL = "/Vedansh_Nagar_Resume.pdf";

const btn =
  "inline-block rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base transition-transform duration-200 hover:scale-105";

const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const res = await fetch(RESUME_URL);
  const blob = await res.blob();
  const url = URL.createObjectURL(new Blob([blob], { type: "application/octet-stream" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = "Vedansh_Nagar_Resume.pdf";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
};

const ResumeSection = () => (
  <section
    id="resume"
    className="relative flex flex-col items-center justify-center text-center px-5 sm:px-8 md:px-10 pt-24 sm:pt-32 md:pt-40 pb-10 gap-10 sm:gap-14"
  >
    <FadeIn delay={0} y={40}>
      <h2
        className="hero-heading font-black uppercase leading-none tracking-tight"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Resume
      </h2>
    </FadeIn>
    <FadeIn delay={0.1} y={30}>
      <p
        className="text-[#D7E2EA] font-medium leading-relaxed max-w-[620px]"
        style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
      >
        Education, experience, projects, skills and certifications, all in one page.
      </p>
    </FadeIn>
    <FadeIn delay={0.2} y={30}>
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={btn}
          style={{
            background:
              "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
            boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
            outline: "2px solid white",
            outlineOffset: "-3px",
          }}
        >
          View Resume
        </a>
        <a
          href={RESUME_URL}
          download="Vedansh_Nagar_Resume.pdf"
          onClick={handleDownload}
          className={`${btn} border-2 border-[#D7E2EA] !text-[#D7E2EA] hover:bg-[#D7E2EA]/10`}
        >
          Download Resume
        </a>
      </div>
    </FadeIn>
  </section>
);

export default ResumeSection;
