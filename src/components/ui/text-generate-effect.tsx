/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import { useEffect } from "react";

import { motion, stagger, useAnimate } from "framer-motion";

import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  title = true,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  title?: boolean;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-white opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div
        className={`${
          title
            ? "w-full text-center text-4xl md:text-8xl font-medium bg-gradient-to-t from-zinc-200 to-zinc-800 bg-clip-text text-transparent"
            : "mt-6 text-center text-base text-foreground/80 md:text-lg"
        }`}
      >
        {renderWords()}
      </div>
    </div>
  );
};
