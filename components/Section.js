import SectionTitle from "./SectionTitle";

const Section = ({ children, title }) => (
  <section className="container mx-auto mb-32">
    <SectionTitle>{title}</SectionTitle>
    {children}
  </section>
);
export default Section;
