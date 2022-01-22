const GradientButton = ({ children, href, centered }) => (
  <a
    href={href}
    className={`cursor-pointer px-6 py-2 mb-8 inline-block md:text-xl text-lg font-poppins font-semibold  text-slate-50 text-center bg-gradient-to-r   from-themePurple  via-themeRed-default to-themeRed-light rounded-3xl transition-all hover:-translate-y-1 duration-300 `}
  >
    {children}
  </a>
);
export default GradientButton;
