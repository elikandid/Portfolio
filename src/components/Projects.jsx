import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { cn } from "../utils/cn";
import Container from "./Container";
import { projects } from "../portfolio";

export default function Projects({
  containerClassName,
  itemClassName,
  hoveredItemClassName,
}) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const items = projects;

  return (
    <div className="" id="projects">
      <Container className={`max-w-[800px] py-10`}>
        <h3 className="text-xl w-full text-center font-semibold">
          Selected Projects
        </h3>
        <div className={cn("grid md:grid-cols-2 py-10 ", containerClassName)}>
          {items.map((item, idx) => {
            const { title, description, href, skills } = item;

            return (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "relative flex flex-col gap-3 p-4  ",
                  itemClassName
                )}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <AnimatePresence>
                  {hoveredIdx === idx && (
                    <motion.span
                      className={cn(
                        "absolute inset-0 z-0 block h-full w-full rounded-xl bg-neutral-100 ",
                        hoveredItemClassName
                      )}
                      layoutId="cardHoverEffect"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.15 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                      }}
                    />
                  )}
                </AnimatePresence>
                <div className="z-[1] space-y-3 ">
                  <h1 className="font-medium text-black">{title}</h1>
                  <p className="text-neutral-600">{description}</p>
                  <ul>
                    {skills.map((skill, index) => (
                      <li
                        key={index}
                        className="relative inline-flex overflow-hidden rounded-full p-px"
                      >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#505050_50%,#bebebe_100%)]" />
                        <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-neutral-50 px-3 py-1 text-xs font-medium text-gray-950 backdrop-blur-3xl">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
