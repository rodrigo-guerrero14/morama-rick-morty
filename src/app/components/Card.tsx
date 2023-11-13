import React from "react";
import Image from "next/image";
import morty from "../images/Image-morty.png";
import icon_gender from "../images/icon-gender.svg";
import icon_origin from "../images/icon-origin.svg";
import icon_status from "../images/icon-status.svg";

const Card = () => {
  return (
    <article className="card rounded-lg">
      <div className="card__header">
        <div className="card__header-text-container">
          <span className="card__species">Human</span>
        </div>
        <Image src={morty} alt="morty" className="card__header-bg" />
      </div>
      <div className="card-info p-4">
        <h2>Morty Smith</h2>

        <div className="grid grid-rows-2 grid-cols-2 mt-2 gap-y-2 gap-x-2">
          <div className="col-span-1 flex items-center">
            <div className="bg-yellow-300	rounded-full p-1.5">
              <Image src={icon_gender} alt="icon gender" />
            </div>
            <p className="ml-2">Male</p>
          </div>

          <div className="col-span-1 flex items-center">
            <div className="bg-green-400 rounded-full p-1.5">
              <Image src={icon_status} alt="icon status" />
            </div>
            <p className="ml-2">Alive</p>
          </div>

          <div className="col-span-2 flex items-center">
            <div className="bg-sky-400 rounded-full p-1.5">
              <Image src={icon_origin} alt="icon origin" />
            </div>
            <p className="ml-2">Dimesion C-137</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
