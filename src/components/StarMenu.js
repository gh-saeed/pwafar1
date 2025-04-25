'use client';

import { useState } from 'react';
import { Star, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const StarMenu = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center absolute -top-4 z-10"
      >
        {isOpen ? (
          <X className="w-8 h-8 text-white" />
        ) : (
          <Star className="w-8 h-8 text-white" />
        )}
      </button>

      <AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      transition={{ duration: 0.25 }}
      className="absolute -top-20 transform -translate-x-1/2 flex justify-center items-center gap-11 px-10 py-3 bg-teal-700 rounded-2xl text-white shadow-x"
    >
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => {
            setIsOpen(false);
            window.location.href = item.href;
          }}
          className="flex flex-col items-center text-sm cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="text-2xl">{item.icon}</div>
          <span className="mt-1">{item.label}</span>
        </div>
      ))}
    </motion.div>
  )}
</AnimatePresence>

      {/* {isOpen && (
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-11 px-10 py-3 bg-teal-700 rounded-2xl text-white shadow-xl">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setIsOpen(false);
                window.location.href = item.href;
              }}
              className="flex flex-col items-center text-sm cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="text-xl">{item.icon}</div>
              <span className="mt-1">{item.label}</span>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default StarMenu; 