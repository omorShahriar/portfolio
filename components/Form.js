import React from "react";
import { GradientButton } from ".";
import { RiSendPlaneFill } from "react-icons/ri";

const Label = ({ children }) => (
  <label className="block text-left mb-6">{children}</label>
);
const Input = ({ type }) => (
  <div className="relative p-[2px] ">
    <input
      className="block font-light relative z-20 peer  border-0 border-themeGrey-light bg-themeGrey-dark w-full rounded focus:ring-0 "
      type={type}
    />
    <div className="absolute z-10 inset-0 transition-all peer-focus:opacity-0  rounded  bg-themeGrey-light" />
    <div className="absolute   rounded inset-0 bg-gradient-to-r   from-themePurple  via-themeRed-default to-themeRed-light" />
  </div>
);
const TextArea = () => (
  <div className="relative p-[2px] ">
    <textarea className="block  font-light relative z-20 peer  border-0 border-themeGrey-light bg-themeGrey-dark w-full rounded focus:ring-0 " />
    <div className="absolute z-10 inset-0 transition-all peer-focus:opacity-0  rounded  bg-themeGrey-light" />
    <div className="absolute   rounded inset-0 bg-gradient-to-r   from-themePurple  via-themeRed-default to-themeRed-light" />
  </div>
);

export default function Form() {
  return (
    <form className=" min-w-[368px] p-6 rounded-3xl bg-themeGrey-default text-center text-slate-50">
      <Label>
        <span className="block mb-2">Name</span>
        <Input type="text" />
      </Label>

      <Label>
        <span className="block mb-2">Email</span>
        <Input type="email" />
      </Label>

      <Label>
        <span className="block mb-2">Message</span>
        <TextArea />
      </Label>

      <GradientButton type="submit">
        <div className="flex gap-2 items-center">
          <RiSendPlaneFill className="text-2xl" /> Send
        </div>
      </GradientButton>
    </form>
  );
}
