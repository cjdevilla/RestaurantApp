import React from "react";

const Header = () => {
  return (
    <div className="w-screen fixed z-50 bg-slate-300 p-6 px-16">
      {/* Desktop and Tablet */}
      <div className="hidden md:flex w-full bg-red-600 h-full p-4"></div>

      {/* Mobile */}
      <div className="flex md:hidden w-full bg-blue-500 h-full p-4"></div>
    </div>
  );
};

export default Header;
