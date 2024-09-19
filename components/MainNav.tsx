import Link from "next/link";
import React from "react";
import ToggleMode from "./ToggleMode";
import MainNavList from "./MainNavList";

const MainNav = () => {
  return (
    <div className="flex justify-between">
      <MainNavList />
      <div className="flex items-center gap-2">
        <Link href="/login">Login</Link>
        <ToggleMode />
      </div>
    </div>
  );
};

export default MainNav;
