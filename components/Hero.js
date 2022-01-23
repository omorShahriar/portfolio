import { HeroImage } from ".";
import { GradientButton } from ".";
const Hero = () => {
  return (
    <div className="container mt-40 mb-24 flex flex-wrap xl:gap-96 lg:gap-24 gap-y-16 justify-center lg:justify-start md:justify-between items-center mx-auto">
      <div className="text-center md:text-left">
        <h1 className="font-poppins text-slate-50 leading-tight  lg:text-5xl sm:text-4xl text-3xl mb-6 font-semibold ">
          Hi
          <br />I am{" "}
          <span className=" bg-gradient-to-r bg-clip-text text-transparent from-themePurple  via-themeRed-default to-themeRed-light">
            Omor Shahriar{" "}
          </span>
          .<br />
          A Front-end Developer <br />& UI Designer
        </h1>
        <GradientButton href="/">Get in touch</GradientButton>
      </div>

      <HeroImage />
    </div>
  );
};

export default Hero;
