import React from "react";
import Image from "next/image";
import backCardImage from "../images/back-card.png";

const CardBack = () => {
  return (
    <>
      <Image src={backCardImage} alt={""} style={{ borderRadius: "8px" }} />
    </>
  );
};

export default CardBack;
