import {
  Footer,
  Form,
  Hero,
  NavBar,
  Projects,
  ReachOutBox,
  Section,
  Skills,
} from "../components";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <div id="work">
        <Section title="my works">
          <Projects />
        </Section>
      </div>
      <div id="skills">
        <Section title="skills">
          <Skills />
        </Section>
      </div>
      <div id="about-me">
        <Section title="about me">
          <p className="text-slate-50 mb-6 md:max-w-prose max-w-sm text-sm md:text-base mx-auto md:mx-0">
            I am an undergrad student studying Mechatronics Engineering at
            Khulna University of Engineering & Technology. I am interested in
            web designing, automation, immersive technologies like V.R / A.R,
            cryptocurrency, blockchain and artifical intelligence.
          </p>
          <p className="text-slate-50 md:max-w-prose max-w-sm text-sm md:text-base mx-auto md:mx-0">
            I love designing user intefaces which are user-friendly, performant,
            seo-friendly and elegant.
          </p>
        </Section>
      </div>
      <div id="contact">
        <Section title="get in touch">
          <div className="flex gap-48 gap-y-24 md:gap-y-12 flex-wrap justify-center md:justify-start">
            <Form />
            <ReachOutBox />
          </div>
        </Section>
      </div>
      <Footer />
    </>
  );
}
