import * as React from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Basecode from "./Basecode";
import "./styles.css";
import "./tailwind.css";

export default function App() {
  return (
    <motion.div
      className="App bg-red-500 flex justify-center items-center"
      animate={{ scale: [0.5, 1] }}
      transition={{ duration: 1 }}
    >
      <Basecode difficulty="hard" />
    </motion.div>
  );
}
