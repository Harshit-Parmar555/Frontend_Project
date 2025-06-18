"use client";

// nextjs / react imports
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// components
import { Wrapper } from "../globals/wrapper";
import { Container } from "../globals/container";
import { TextGenerateEffect } from "../ui/text_generate_effect";
import { FaWindows } from "react-icons/fa";

// framer-motion imports
import { motion, useTransform, useScroll } from "framer-motion";

export default function Hero() {
  const heroTitle = "From Idea to Code Instantly";
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  return (
    <Wrapper>
      <div className="absolute inset-0 opacity-10 h-[150vh] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]" />
      <Container>
        <div className="flex h-full flex-col items-center justify-center py-10 sm:py-16 md:py-20 mt-16 sm:mt-20">
          <div className="flex w-full max-w-full md:max-w-6xl flex-col items-center px-2 sm:px-4">
            <div>
              <TextGenerateEffect words={heroTitle} title={true} className="" />
            </div>

            <p className="mt-4 max-w-2xl sm:max-w-3xl md:max-w-4xl text-center text-xs sm:text-sm md:text-lg text-zinc-400 text-foreground/80 font-jetbrains-mono">
              Build high-quality software faster with an AI code editor that
              understands context, fixes bugs instantly, and writes cleaner code
              saving you hours every week across projects and stacks
            </p>

            <div className="relative mt-8 w-full flex flex-col sm:flex-row items-center justify-center gap-4 md:mt-12">
              <div className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-white text-black text-xs md:text-base rounded-lg px-4 py-3 font-inter cursor-pointer flex items-center justify-center gap-2 hover:bg-zinc-200 transition">
                  <FaWindows /> Download for Windows
                </button>
              </div>
              <div className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-black text-white border-[1px] border-zinc-800 text-xs md:text-base rounded-lg px-4 py-3 font-inter cursor-pointer flex items-center justify-center gap-2 hover:border-zinc-600 transition">
                  All Downloads
                </button>
              </div>
            </div>
          </div>

          <div className="relative mx-auto flex w-full items-center justify-center py-8 sm:py-12 md:py-20 border-none mt-10 sm:mt-16">
            <div
              className="relative flex items-center justify-center m-0 md:-m-2 rounded-xl bg-opacity-50 p-1 sm:p-2 backdrop-blur-3xl lg:-m-4 lg:rounded-2xl w-full"
              ref={imageRef}
            >
              <div className="absolute inset-0 -z-10 h-full w-full  blur-[80px] opacity-40 gradient" />

              <div className="relative flex items-center justify-center w-full">
                <motion.div style={{ scale }} className="z-10 relative w-full">
                  <Image
                    src="/assets/dashboard.png"
                    alt="Dashboard image"
                    width={1200}
                    height={900}
                    quality={100}
                    className="rounded-md bg-foreground/10 shadow-2xl lg:rounded-xl w-full h-auto max-h-[220px] xs:max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] object-contain"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}
