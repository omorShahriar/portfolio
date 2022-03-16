import Head from "next/head";
import {
  Footer,
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
      <Head>
        <title>Omor&apos;s Portfolio</title>
      </Head>
      <NavBar />
      <Hero />
      <div className="snap-y">
        <div id="work" className="snap-start">
          <Section title="my works">
            <Projects />
          </Section>
        </div>
        <div id="skills" className="snap-start">
          <Section title="skills">
            <Skills />
          </Section>
        </div>
        <div id="about-me" className="snap-start">
          <Section title="about me">
            <p className="text-slate-50 mb-6 md:max-w-prose max-w-sm text-sm md:text-base mx-auto md:mx-0">
              I am an undergrad student studying Mechatronics Engineering at
              Khulna University of Engineering & Technology. I am interested in
              web designing, automation, immersive technologies like V.R / A.R,
              cryptocurrency, blockchain and artifical intelligence.
            </p>
            <p className="text-slate-50 md:max-w-prose max-w-sm text-sm md:text-base mx-auto md:mx-0">
              I love designing user intefaces which are user-friendly,
              performant, seo-friendly and elegant.
            </p>
          </Section>
        </div>
        <div id="contact" className="snap-start">
          <Section title="get in touch">
            <ReachOutBox />
          </Section>
        </div>
      </div>
      <Footer />
    </>
  );
}
