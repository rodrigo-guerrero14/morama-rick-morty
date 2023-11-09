import React from "react";
import Image from "next/image";
import logo from "../images/Logo.png";
import coins from "../images/coins.png";
import hearth from "../images/hearth.png";

const Header = () => {
  return (
    <div className="col-span-4 flex justify-between">
      <div>
        <Image src={logo} alt="" />
      </div>

      <div className="flex">
        <div className="flex">
          <Image
            src={coins}
            alt="coins"
            style={{ width: "20px", height: "20px" }}
            className="grow-0"
          />
          <span style={{ color: "white" }}>$0000</span>
        </div>
        <div className="flex ml-8">
          <Image
            src={hearth}
            alt="hearths"
            style={{ width: "20px", height: "20px" }}
            className="grow-0"
          />
          <span style={{ color: "white" }}>X3</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
