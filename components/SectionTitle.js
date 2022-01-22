const SectionTitle = ({ children }) => (
  <h2 className=" mb-8 md:text-4xl text-3xl text-center md:text-left  capitalize text-slate-50   font-semibold ">
    <span className=" inline-flex items-center md:items-start flex-col gap-2">
      <span className=" w-7/12 block h-2 bg-gradient-to-r   from-themePurple  via-themeRed-default to-themeRed-light rounded-md"></span>
      {children}
    </span>
  </h2>
);

export default SectionTitle;
