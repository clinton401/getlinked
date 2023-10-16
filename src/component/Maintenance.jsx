import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const containerVariant = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      //   delay: 0.5,
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
const Maintenance = () => {
    const navigate = useNavigate()
    return (
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{
          width: "100%",
          height: "85dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 5%",
        }}
      >
        <h1 style={{ fontSize: 40, textAlign: "center", paddingBottom: 40 }}>
          Site maintenance in progress try again later
        </h1>
        <button onClick={() => navigate("/")}>
          <span>Home</span>
        </button>
      </motion.div>
    );
}

export default Maintenance;