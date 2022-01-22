import { FaGithubAlt, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
const BrandLink = () => (
  <a
    href="/"
    className="font-black uppercase text-2xl text-slate-50 bg-gradient-to-r bg-clip-text transition-all hover:text-transparent from-themePurple  via-themeRed-default to-themeRed-light "
  >
    omor shahriar
  </a>
);

const NavList = ({ children }) => <ul className="flex gap-6">{children}</ul>;
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
  <div className="flex gap-6">{children}</div>
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
const NavBar = () => (
  <nav className="container pt-6 pb-2 mb-20 items-center border-b-themeGrey-light border-b-2 flex flex-wrap justify-between mx-auto">
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
  </nav>
);

export default NavBar;
