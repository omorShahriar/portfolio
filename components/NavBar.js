import { useState } from "react";

import { FaGithubAlt, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import Link from "next/link";
import SideMenu from "./SideMenu";
const BrandLink = () => (
  <Link href="/">
    <a className="font-black tracking-wide uppercase md:text-2xl text-xl text-slate-50 bg-gradient-to-r bg-clip-text transition-all hover:text-transparent from-themePurple  via-themeRed-default to-themeRed-light ">
      Omor Shahriar
    </a>
  </Link>
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
export const NavItem = ({ children, onClick }) => (
  <li
    onClick={onClick}
    className="text-slate-50 font-semibold text-[18px] leading-6 bg-gradient-to-r bg-clip-text transition-all hover:text-transparent from-themePurple  via-themeRed-default to-themeRed-light"
  >
    {children}
  </li>
);
export const NavLink = ({ children, href }) => (
  <Link href={href}>
    <a className="">{children}</a>
  </Link>
);

export const SocialLinks = ({ children }) => (
  <div className="lg:flex hidden gap-6">{children}</div>
);
export const SocialLink = ({ href, children }) => (
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
  return (
    <nav>
      <div className="fixed top-0 w-full z-40 backdrop-blur-md border-b-themeGrey-light border-b-2 ">
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
            <SocialLink
              href="https://github.com/omorShahriar"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubAlt />
            </SocialLink>
            <SocialLink
              href="https://www.facebook.com/omor.shahriar"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/omor-shahriar/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </SocialLink>
          </SocialLinks>
          <BreadCrumb onClick={setMenuOpen} />
        </div>
      </div>

      <SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </nav>
  );
};

export default NavBar;
