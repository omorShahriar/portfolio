import { useEffect, useRef } from "react";
import { animated, useTransition, config } from "react-spring";
import { FaGithubAlt, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

import { NavLink, NavItem, SocialLink } from "./NavBar";

const SideMenu = ({ menuOpen, setMenuOpen }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      console.log("firing");
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [menuOpen, setMenuOpen, menuRef]);

  const transitions = useTransition(menuOpen, {
    from: { x: 200 },
    enter: { x: 0 },
    leave: { x: 200 },
    reverse: menuOpen,
    delay: 200,
    config: config.slow,
  });
  return transitions(
    (styles, item) =>
      item && (
        <animated.aside
          ref={menuRef}
          className="fixed right-0 top-0  z-40 backdrop-blur-md  h-screen  w-48  "
          style={styles}
        >
          {" "}
          <div className=" h-screen flex flex-col justify-between py-6 px-2 backdrop-blur-md  bg-themeGrey-light/80 w-full  ">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-slate-50 text-3xl max-w-fit "
            >
              <CgClose />
            </button>

            <ul className="flex flex-col gap-4 ">
              <NavItem onClick={() => setMenuOpen(!menuOpen)}>
                <NavLink href="#work">Work</NavLink>
              </NavItem>
              <NavItem onClick={() => setMenuOpen(!menuOpen)}>
                <NavLink href="#skills">Skills</NavLink>
              </NavItem>
              <NavItem onClick={() => setMenuOpen(!menuOpen)}>
                <NavLink href="#about-me">About Me</NavLink>
              </NavItem>
              <NavItem onClick={() => setMenuOpen(!menuOpen)}>
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
  );
};

export default SideMenu;
