"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import morty from "../images/Image-morty.png";
import rick from "../images/Image-rick.png";
import alan from "../images/Image-alan.png";
import terry from "../images/Image-scary-terry.png";
import icon_gender from "../images/icon-gender.svg";
import icon_origin from "../images/icon-origin.svg";
import icon_status from "../images/icon-status.svg";

interface Props {
  character: number;
}

const Card = ({ character }: Props) => {
  const [charImage, setCharImage] = useState(morty);
  const [charName, setCharName] = useState("Morty Smith");
  const [charSpecie, setCharSpecie] = useState("Human");
  const [charStatus, setCharStatus] = useState("Alive");
  const [charDimension, setCharDimension] = useState<string | null>(null);

  const characterImage = () => {
    switch (character) {
      case 1:
        setCharImage(morty);
        break;
      case 2:
        setCharImage(rick);
        break;
      case 3:
        setCharImage(alan);
        break;
      case 4:
        setCharImage(terry);
        break;
      default:
        break;
    }
  };

  const characterName = () => {
    switch (character) {
      case 1:
        setCharName("Morty Smith");
        break;
      case 2:
        setCharName("Cool Rick");
        break;
      case 3:
        setCharName("Alan Rails");
        break;
      case 4:
        setCharName("Scary Terry");
        break;
      default:
        break;
    }
  };

  const characterSpecie = () => {
    if (character === 4) {
      setCharSpecie("Mythological Creature");
    } else {
      setCharSpecie("Human");
    }
  };

  const characterStatus = () => {
    if (character === 3) {
      setCharStatus("Dead");
    } else {
      setCharStatus("Alive");
    }
  };

  const characterDimension = () => {
    switch (character) {
      case 1:
        setCharDimension("Dimension C-137");
        break;
      case 2:
        setCharDimension("Dimension K-83");
        break;
      case 3:
        setCharDimension(null);
        break;
      case 4:
        setCharDimension("Mr. Goldenfold's dream");
        break;
    }
  };

  useEffect(() => {
    characterImage();
    characterName();
    characterSpecie();
    characterStatus();
    characterDimension();
  }, []);

  return (
    <article className="card rounded-lg">
      <div className="flex font-sans h-48">
        <div className="card__header-text-container absolute p-2 rounded-lg mt-4 ml-4">
          <span className="card__species">{charSpecie}</span>
        </div>
        <div className="flex-none w-full relative">
          <Image
            src={charImage}
            alt="morty"
            className="card__header-bg absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="card-info p-4">
        <h2>{charName}</h2>

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
            <p className="ml-2">{charStatus}</p>
          </div>

          {charDimension !== null ? (
            <div className="col-span-2 flex items-center">
              <div className="bg-sky-400 rounded-full p-1.5">
                <Image src={icon_origin} alt="icon origin" />
              </div>
              <p className="ml-2">{charDimension}</p>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
};

export default Card;
