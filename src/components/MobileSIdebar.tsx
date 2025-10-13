"use client"

import { FaListUl, FaRegArrowAltCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { ImCross } from "react-icons/im";
import { useState } from "react";

export default function MobileSIdebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <div className="text-white w-full 2xs:flex md:hidden justify-end">
				<button
					onClick={(e) => {
						setIsSidebarOpen(true);
						e.stopPropagation();
					}}
					className="hover:cursor-pointer w-8 aspect-square rounded-full bg-white text-black flex items-center justify-center"
				>
					<FaListUl />
				</button>

				{isSidebarOpen && (
					<div>
						<motion.div id="sidebar" initial={{ x: "+100%" }} animate={{ x: 0 }} exit={{ x: "+100%" }} transition={{ duration: 0.3 }} className="fixed top-0 right-0 h-full w-64 bg-background-contrast shadow-lg p-5 z-50">
							{/* Close Button */}
							<button onClick={() => setIsSidebarOpen(false)} className="p-1 rounded-full text-xl bg-white text-black absolute top-3 right-3">
								<FaRegArrowAltCircleRight />
							</button>

							<div className="flex flex-col md:hidden mt-16 mx-1 text-2xl w-full items-start gap-y-6 font-extrabold">
								<a href="/my-journey" className="rotate-child-div flex gap-x-3">
									My Journey <div>🌱</div>
								</a>
								<a href="/my-journey" className="rotate-child-div flex gap-x-3">
									Projects <div>🛠️</div>
								</a>
								<a href="/my-journey" className="rotate-child-div flex gap-x-3">
									Testimonials <div>⭐</div>
								</a>
							</div>
						</motion.div>
					</div>
				)}
			</div>
  )
}
