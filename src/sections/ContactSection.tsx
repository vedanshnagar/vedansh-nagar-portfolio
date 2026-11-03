import FadeIn from "../components/FadeIn";
import SocialLink from "../components/SocialLink";
import ContactButton from "../components/ContactButton";

const ContactSection = () => (
  <section
    id="contact"
    className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-28 pb-20 flex flex-col items-center text-center gap-10"
  >
    <FadeIn delay={0} y={40}>
      <h2
        className="hero-heading font-black uppercase leading-none tracking-tight"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Contact me
      </h2>
    </FadeIn>
    <FadeIn delay={0.1} y={30}>
      <a
        href="mailto:vedu9622@gmail.com"
        className="text-[#D7E2EA] font-medium break-all hover:opacity-70 transition-opacity"
        style={{ fontSize: "clamp(1.1rem, 3vw, 2.2rem)" }}
      >
        vedu9622@gmail.com
      </a>
    </FadeIn>
    <FadeIn delay={0.2} y={30}>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <SocialLink platform="github" href="https://github.com/vedanshnagar" label="GitHub" />
        <SocialLink
          platform="linkedin"
          href="https://linkedin.com/in/nagar-vedansh-a4b612377"
          label="LinkedIn"
        />
      </div>
    </FadeIn>
    <FadeIn delay={0.3} y={30}>
      <ContactButton />
    </FadeIn>
  </section>
);

export default ContactSection;
