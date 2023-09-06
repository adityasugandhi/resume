// Cardtemplate.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../Styles/style.scss"; // Import your CSS file for styling

export default function Cardtemplate(props) {
    const items = props.items;
    const [selectedId, setSelectedId] = useState(null);
  
    return (
      <div className="card-container">
        {items.map((item) => (
          <motion.div
            key={item.id}
            layoutId={item.id}
            onClick={() => setSelectedId(item.id)}
            className={`card ${selectedId === item.id ? "selected" : ""}`}
            initial={{ opacity: 0 }} // Initial state when card is not selected
            animate={{ opacity: 1 }} // Animation when card is selected
            exit={{ opacity: 0 }} // Animation when card is deselected
          >
            <motion.h5>{item.subtitle}</motion.h5>
            <motion.h2>{item.title}</motion.h2>
          </motion.div>
        ))}
        <AnimatePresence>
          {selectedId && (
            <motion.div
              layoutId={selectedId}
              className="expanded-card"
              onClick={() => setSelectedId(null)}
              initial={{ opacity: 0, scale: 0 }} // Initial state when expanded card is not visible
              animate={{ opacity: 1, scale: 1 }} // Animation when expanded card becomes visible
              exit={{ opacity: 0, scale: 0 }} // Animation when expanded card is closed
            >
              <motion.h5>{items.find((item) => item.id === selectedId)?.subtitle}</motion.h5>
              <motion.h2>{items.find((item) => item.id === selectedId)?.title}</motion.h2>
              <motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }