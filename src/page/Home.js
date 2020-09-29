import { motion } from "framer-motion";
import React from "react";

export default function Home() {
  return (
    <div className="flex h-screen">
      <motion.h1 className="m-auto text-3xl">Welcome Home</motion.h1>
    </div>
  );
}
