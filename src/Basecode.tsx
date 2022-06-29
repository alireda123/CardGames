import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Images } from "../public/CardImages";
import "./tailwind.css";

const Basecode = (props: { difficulty: string }) => {
  interface CardState {
    id: number;
    image: string;
    mappingID: number;
  }

  const [Cards, setCards] = useState<CardState[]>([]);
  const [board, setBoard] = useState([]);

  useEffect(() => {
    setCards(Images);
  }, []);

  return (
    <motion.div
      animate={{ scale: [0.5, 1] }}
      transition={{ duration: 1 }}
      className="grid grid-cols-4 gap-4"
    >
      {Cards &&
        Cards.map((item) => (
          <motion.div className="min-h-max bg-red-200" key={item.mappingID}>
            <img src={item.image} alt="cardNotWorking" />
          </motion.div>
        ))}
    </motion.div>
  );
};

export default Basecode;
