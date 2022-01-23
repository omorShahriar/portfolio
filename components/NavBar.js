import { useState } from "react";
import { animated, useTransition, config } from "react-spring";
import { FaGithubAlt, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { CgMenuRight, CgClose } from "react-icons/cg";
import Link from "next/link";
const BrandLink = () => (
  <a
    href="/"
    className="font-black tracking-wide uppercase md:text-2xl text-xl text-slate-50 bg-gradient-to-r bg-clip-text transition-all hover:text-transparent from-themePurple  via-themeRed-default to-themeRed-light "
  >
    Omor Shahriar
  </a>
);
const BreadCrumb = ({ onClick }) => (
  <button
    onClick={() => onClick(true)}
    className=" lg:hidden text-3xl cursor-pointer text-slate-50  "
  >
    <CgMenuRight />
  </button>
);

const NavList = ({ children }) => (
  <ul className=" gap-6 hidden lg:flex ">{children}</ul>
);
const NavItem = ({ children }) => (
  <li className="text-slate-50 font-semibold text-[18px] leading-6 bg-gradient-to-r bg-clip-text transition-all hover:text-transparent from-themePurple  via-themeRed-default to-themeRed-light">
    {children}
  </li>
);
const NavLink = ({ children, href }) => (
  <Link href={href}>
    <a className="">{children}</a>
  </Link>
);

const SocialLinks = ({ children }) => (
  <div className="lg:flex hidden gap-6">{children}</div>
);
const SocialLink = ({ href, children }) => (
  <span className=" flex items-center ">
    <a
      href={href}
      className="inline-block  p-2 rounded-full transition-all hover:bg-themeGrey-light text-2xl text-slate-50"
    >
      {children}
    </a>
  </span>
);
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const transitions = useTransition(menuOpen, {
    from: { x: 200 },
    enter: { x: 0 },
    leave: { x: 200 },
    reverse: menuOpen,
    delay: 200,
    config: config.gentle,
  });
  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-md border-b-themeGrey-light border-b-2 ">
      <div className=" container px-2 pt-6 pb-2  items-center  flex flex-wrap justify-between mx-auto">
        <BrandLink />
        <NavList>
          <NavItem>
            <NavLink href="#work">Work</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#skills">Skills</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#about-me">About Me</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact">Contact</NavLink>
          </NavItem>
        </NavList>
        <SocialLinks>
          <SocialLink href="https://www.facebook.com">
            <FaGithubAlt />
          </SocialLink>
          <SocialLink href="https://www.facebook.com">
            <FaFacebookF />
          </SocialLink>
          <SocialLink href="https://www.facebook.com">
            <FaLinkedinIn />
          </SocialLink>
        </SocialLinks>
        <BreadCrumb onClick={setMenuOpen} />
      </div>
      {transitions(
        (styles, item) =>
          item && (
            <animated.aside
              className="fixed right-0 top-0   z-50 backdrop-blur-md  h-screen  w-48  "
              style={styles}
            >
              {" "}
              <div className=" h-screen flex flex-col justify-between py-6 px-2  bg-themeGrey-light/80 w-full  ">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="text-slate-50 text-3xl max-w-fit "
                >
                  <CgClose />
                </button>

                <ul className="flex flex-col gap-4 ">
                  <NavItem>
                    <NavLink href="#work">Work</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#skills">Skills</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#about-me">About Me</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#contact">Contact</NavLink>
                  </NavItem>
                </ul>
                <div className="flex gap-2  items-center justify-center ">
                  <SocialLink href="https://www.facebook.com">
                    <FaGithubAlt />
                  </SocialLink>
                  <SocialLink href="https://www.facebook.com">
                    <FaFacebookF />
                  </SocialLink>
                  <SocialLink href="https://www.facebook.com">
                    <FaLinkedinIn />
                  </SocialLink>
                </div>
              </div>
            </animated.aside>
          )
      )}
    </nav>
  );
};

export default NavBar;
