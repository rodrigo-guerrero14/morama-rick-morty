"use client";
import React, { useState } from "react";
import Card from "./Card";
import CardBack from "./CardBack";
import ReactCardFlip from "reactjs-flip-card";

const CardContainer = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      <ReactCardFlip
        containerStyle={{ width: "100%", minHeight: "320px" }}
        backComponent={<Card character={1} />}
        frontComponent={<CardBack />}
        flipTrigger="onClick"
      />
      <ReactCardFlip
        containerStyle={{ width: "100%", minHeight: "320px" }}
        backComponent={<Card character={1} />}
        frontComponent={<CardBack />}
        flipTrigger="onClick"
      />
      <ReactCardFlip
        containerStyle={{ width: "100%", minHeight: "320px" }}
        backComponent={<Card character={4} />}
        frontComponent={<CardBack />}
        flipTrigger="onClick"
      />
      <ReactCardFlip
        containerStyle={{ width: "100%", minHeight: "320px" }}
        backComponent={<Card character={4} />}
        frontComponent={<CardBack />}
        flipTrigger="onClick"
      />

      <ReactCardFlip
        containerStyle={{ width: "100%", minHeight: "320px" }}
        backComponent={<Card character={1} />}
        frontComponent={<CardBack />}
        flipTrigger="onClick"
      />
      <ReactCardFlip
        containerStyle={{ width: "100%", minHeight: "320px" }}
        backComponent={<Card character={1} />}
        frontComponent={<CardBack />}
        flipTrigger="onClick"
      />
      <ReactCardFlip
        containerStyle={{ width: "100%", minHeight: "320px" }}
        backComponent={<Card character={2} />}
        frontComponent={<CardBack />}
        flipTrigger="onClick"
      />
      <ReactCardFlip
        containerStyle={{ width: "100%", minHeight: "320px" }}
        backComponent={<Card character={2} />}
        frontComponent={<CardBack />}
        flipTrigger="onClick"
      />

      <ReactCardFlip
        containerStyle={{ width: "100%", minHeight: "320px" }}
        backComponent={<Card character={3} />}
        frontComponent={<CardBack />}
        flipTrigger="onClick"
      />
      <ReactCardFlip
        containerStyle={{ width: "100%", minHeight: "320px" }}
        backComponent={<Card character={3} />}
        frontComponent={<CardBack />}
        flipTrigger="onClick"
      />
      <ReactCardFlip
        containerStyle={{ width: "100%", minHeight: "320px" }}
        backComponent={<Card character={4} />}
        frontComponent={<CardBack />}
        flipTrigger="onClick"
      />
      <ReactCardFlip
        containerStyle={{ width: "100%", minHeight: "320px" }}
        backComponent={<Card character={4} />}
        frontComponent={<CardBack />}
        flipTrigger="onClick"
      />
    </>
  );
};

export default CardContainer;
