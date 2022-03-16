import { RiPhoneFill } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";

const Label = ({ children }) => {
  return (
    <span className="flex gap-2 md:text-xl text-md  capitalize items-center text-white ">
      {children}
    </span>
  );
};

const LinkShell = ({ type, children }) => {
  const mailOrPhone = type === "mail" ? "mailto" : "tel";
  return (
    <a
      href={`${mailOrPhone}:${children[1]}`}
      className=" flex items-center justify-center gap-x-8 flex-wrap md:text-xl text-md bg-gradient-to-r bg-clip-text text-transparent from-themePurple  via-themeRed-default to-themeRed-light absolute inset-0 "
    >
      {children}
    </a>
  );
};

const ReachLink = ({ icon, type, children }) => {
  const IconsMap = { RiPhoneFill, MdAlternateEmail };
  const ReachIcon = IconsMap[icon] || null;
  const mailOrPhone = type === "mail" ? `email` : `call`;

  return (
    <div className=" bg-themeGrey-default hover:bg-themeGrey-light text-slate-50 mb-8  p-16  transition-all   ring-0 hover:ring-2 ring-transparent hover:ring-themeGrey-light ring-offset-transparent hover:ring-offset-stone-900  ring-offset-8 radius rounded-md relative duration-300">
      {type == "mail" ? (
        <LinkShell type={type}>
          <Label>
            <ReachIcon className="md:text-[32px] text-[28px]" /> {mailOrPhone}
          </Label>
          {children}
        </LinkShell>
      ) : (
        <LinkShell type={type}>
          <Label>
            <ReachIcon className="md:text-[32px] text-[28px]" /> {mailOrPhone}
          </Label>
          {children}
        </LinkShell>
      )}
    </div>
  );
};

export default ReachLink;
