import { RiPhoneFill } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";

const ReachLink = ({ icon, type, children }) => {
  const IconsMap = { RiPhoneFill, MdAlternateEmail };
  const ReachIcon = IconsMap[icon] || null;
  const mailOrPhone = type === "mail" ? `email` : `call`;
  const linkType = {
    mailto: type == "mail" ? `mailto:${children}` : null,
    tel: type == "tel" ? `tel:${children}` : null,
  };
  return (
    <div className="flex flex-col gap-2 text-slate-50 mb-8 ">
      <span className="flex gap-2 md:text-2xl text-xl capitalize items-center">
        <ReachIcon className="md:text-[32px] text-[28px]" /> {mailOrPhone}
      </span>
      {type == "mail" ? (
        <a
          href={`mailto:${children}`}
          className=" md:text-2xl text-xl bg-gradient-to-r bg-clip-text text-transparent from-themePurple  via-themeRed-default to-themeRed-light"
        >
          {children}
        </a>
      ) : (
        <a
          href={`tel:${children}`}
          className=" md:text-2xl text-xl bg-gradient-to-r bg-clip-text text-transparent from-themePurple  via-themeRed-default to-themeRed-light"
        >
          {children}
        </a>
      )}
    </div>
  );
};

export default ReachLink;
