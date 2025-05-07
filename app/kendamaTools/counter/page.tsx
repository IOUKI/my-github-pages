"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";

const CounterPage = () => {
  const [count, setCount] = useState(0);

  // add count
  const increment = useCallback(() => {
    setCount(count + 1);
    localStorage.setItem("count", (count + 1).toString());
  }, [count, setCount]);

  // handle reset count
  const reset = useCallback(() => {
    const yes = confirm("確定重置計數？");
    if (yes) {
      setCount(0);
    }
  }, [setCount]);

  // load local count
  useEffect(() => {
    const localCount = localStorage.getItem("count");
    if (localCount) setCount(parseInt(localCount));
  }, [setCount]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center select-none">
      <div className="mb-10">
        <motion.div
          key={count}
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 1.4, opacity: 0.8 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
          className="text-9xl font-bold mb-4 text-blue-500"
        >
          {count}
        </motion.div>
      </div>
      <div className="grid grid-cols-3 gap-2 w-64">
        <button
          onClick={reset}
          className="px-4 py-2 bg-red-500 text-white text-4xl rounded-lg hover:bg-red-600"
        >
          <i className="bi bi-arrow-counterclockwise"></i>
        </button>
        <button
          onClick={increment}
          className="px-4 py-2 col-span-2 bg-blue-500 text-white text-4xl rounded-lg hover:bg-blue-600"
        >
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>
    </div>
  );
};

export default CounterPage;
