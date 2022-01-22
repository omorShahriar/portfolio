import React from "react";

export default function Footer() {
  return (
    <footer className="container mx-auto  text-center border-t-2 border-t-themeGrey-light pt-6 pb-4">
      <span className="text-slate-50 text-md ">
        &copy; <a>WebL Innovations, {new Date().getFullYear()}</a>
      </span>
    </footer>
  );
}
