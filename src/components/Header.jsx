import React from "react";
import Button from "./ui/Button";

const Header = () => {
  return (
    <div className=" sricky  top-0 flex justify-between ">
      <h5>Logo</h5>
      <div className="flex justify-center items-center gap-4">
        <Button variant="outline">Log In</Button>
        <Button variant="solid">Register</Button>
      </div>
    </div>
  );
};

export default Header;
