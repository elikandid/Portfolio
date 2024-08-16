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
      <div className={cn(" ", containerClassName)}>
        <div>
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-100/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-800 lg:sr-only">
              Projects
            </h2>
          </div>
          <ol className="group/list">
            {items.map((item, idx) => {
              const { title, description, href, skills, span } = item;

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
                          "absolute inset-0 z-0 block h-full w-full rounded-xl bg-teal-50 ",
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

                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                      <div
                        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                        aria-label="2024 to Present"
                      >
                        {span}
                      </div>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-800">
                          <div>
                            <a
                              className="inline-flex items-baseline font-medium leading-tight text-slate-800 group/link text-base"
                              href={href}
                              target="_blank"
                              rel="noreferrer noopener"
                              aria-label=""
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                {title}
                                <span className="inline-block">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </a>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          {description}
                        </p>
                        <ul
                          className="mt-2 flex flex-wrap"
                          aria-label="Technologies used"
                        >
                          {skills.map((skill) => (
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-500 ">
                                {skill}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                </a>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
