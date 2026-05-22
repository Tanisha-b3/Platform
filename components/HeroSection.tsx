"use client";

import { motion } from "framer-motion";
import {
  ReceiptText,
  Gavel,
  CheckSquare2,
  FileText,
  ListChecks ,
} from "lucide-react";

import { faGavel } from '@fortawesome/free-solid-svg-icons';

const stagger = {
  initial: { opacity: 0, y: 30 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] },
  }),
};

export function HeroSection() {
  return (
    <section className="relative mx-auto overflow-hidden bg-[#F3F3F7] dark:bg-[#0f1020] min-h-screen flex items-center justify-center transition-colors duration-500">
      {/* ===== DESKTOP LAYOUT (lg+) ===== */}
      <div className="relative w-full max-w-[1440px] hidden lg:block" style={{ height: "864px" }}>
        <div className="absolute rounded-full bg-[#DDE2EF] dark:bg-[#1c1d35] -rotate-12" style={{ left: "-85px", top: "450px", width: "200px", height: "80px" }} />
        <div className="absolute rounded-full bg-[#DDE2EF] dark:bg-[#1c1d35]" style={{ left: "-85px", top: "550px", width: "300px", height: "80px" }} />
        <div className="absolute rounded-full bg-[#DDE2EF] dark:bg-[#1c1d35]" style={{ left: "-85px", top: "650px", width: "468px", height: "80px" }} />
        <div className="absolute rounded-full bg-[#DDE2EF] dark:bg-[#1c1d35] rotate-6" style={{ left: "1300px", top: "102px", width: "300px", height: "80px" }} />
        <div className="absolute rounded-full bg-[#DDE2EF] dark:bg-[#1c1d35]" style={{ left: "1185px", top: "200px", width: "352px", height: "80px" }} />
        <div className="absolute rounded-full bg-[#DDE2EF] dark:bg-[#1c1d35]" style={{ left: "1300px", top: "300px", width: "340px", height: "80px" }} />

        <div className="absolute" style={{ left: "155px", top: "55px", width: "700px" }}>
          <motion.div custom={0} initial="initial" animate="animate" variants={stagger} className="text-[60px] leading-[78px] font-light tracking-[-3px] text-[#7474A6] dark:text-[#b3b5ff]">A single platform to</motion.div>
          <motion.div custom={1} initial="initial" animate="animate" variants={stagger} className="text-[60px] leading-[78px] font-light tracking-[-3px] text-[#7474A6] dark:text-[#b3b5ff]"><span className="font-bold">manage</span> every part of</motion.div>
          <motion.div custom={2} initial="initial" animate="animate" variants={stagger} className="text-[60px] leading-[78px] font-light tracking-[-3px] text-[#7474A6] dark:text-[#b3b5ff]">your <span className="font-bold">legal work</span></motion.div>
          <motion.p custom={3} initial="initial" animate="animate" variants={stagger} className="mt-6 w-[500px] text-[22px] leading-[38px] text-[#3341FF] dark:text-[#8c95ff]">Track matters, coordinate schedules, manage clients, centralize documents, and handle communication - all in one system.</motion.p>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.7, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6, ease: [0.23, 1, 0.32, 1] }} className="absolute" style={{ left: "725px", top: "340px", width: "415px", height: "90px" }}>
          <div className="flex items-center rounded-full bg-[#3341FF] shadow-2xl w-full h-full" style={{ padding: "0 40px", transform: "rotate(10deg)" }}>
            <ReceiptText size={28} className="text-white flex-shrink-0" />
            <span className="text-[34px] font-semibold text-white ml-4">Billing</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.7, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8, ease: [0.23, 1, 0.32, 1] }} className="absolute" style={{ left: "305px", top: "505px", width: "360px", height: "90px" }}>
          <div className="flex items-center rounded-full bg-[#E57D28] shadow-2xl w-full h-full px-10 gap-4" style={{ transform: "rotate(-10deg)" }}>
            <Gavel size={28} className="text-white flex-shrink-0" />
            <span className="text-[34px] font-semibold text-white">Matters</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.85, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.0, ease: [0.23, 1, 0.32, 1] }} className="absolute" style={{ left: "690px", top: "525px", width: "400px", height: "90px" }}>
          <div className="flex items-center rounded-full bg-[#9C9BED] dark:bg-[#2b2d5b] shadow-2xl w-full h-full px-6 gap-4" style={{ transform: "rotate(4deg)" }}>
            <div className="w-[6px] h-12 rounded-full bg-[#E57D28] flex-shrink-0" />
            <img src="./image.png" alt="avatar" className="w-12 h-12 rounded-full flex-shrink-0" />
            <div className="min-w-0">
              <h3 className="text-[20px] font-semibold text-[#22234B] dark:text-white leading-tight">John Doe - Portal</h3>
              <p className="text-[13px] leading-5 text-[#64658d] dark:text-[#c8cbff]">Hey! Could you please review a<br />document for me?</p>
              <span className="text-[11px] text-[#73749a] dark:text-[#9ea3ff]">MAT-2233 · 2 h ago</span>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.7, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.2, ease: [0.23, 1, 0.32, 1] }} className="absolute" style={{ left: "500px", top: "655px", width: "390px", height: "90px" }}>
          <div className="flex items-center rounded-full bg-[#2D234D] shadow-2xl w-full h-full px-10 gap-4">
            <ListChecks size={28} color="#F48B2D" className="flex-shrink-0" />
            <span className="text-[34px] font-semibold text-[#F48B2D]">Tasks</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.7, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.4, ease: [0.23, 1, 0.32, 1] }} className="absolute" style={{ left: "980px", top: "645px", width: "440px", height: "90px" }}>
          <div className="flex items-center rounded-full bg-[#2D234D] shadow-2xl w-full h-full px-10 gap-4" style={{ transform: "rotate(-8deg)" }}>
            <FileText size={28} color="#F48B2D" className="flex-shrink-0" />
            <span className="text-[34px] font-semibold text-[#F48B2D]">Documents</span>
          </div>
        </motion.div>
      </div>

      {/* ===== MOBILE/TABLET LAYOUT (<lg) ===== */}
      <div className="lg:hidden w-full px-6 py-16 md:px-12">
        {/* Background shapes - subtle */}
        <div className="absolute rounded-full bg-[#DDE2EF] dark:bg-[#1c1d35] opacity-40" style={{ left: "-60px", top: "200px", width: "180px", height: "60px" }} />
        <div className="absolute rounded-full bg-[#DDE2EF] dark:bg-[#1c1d35] opacity-40" style={{ right: "-40px", top: "300px", width: "200px", height: "60px" }} />

        <div className="relative z-10 max-w-xl mx-auto space-y-8">
          <div className="space-y-2">
            <p className="text-[36px] md:text-[48px] leading-[1.1] font-light tracking-[-2px] text-[#7474A6] dark:text-[#b3b5ff]">A single platform to</p>
            <p className="text-[36px] md:text-[48px] leading-[1.1] font-light tracking-[-2px] text-[#7474A6] dark:text-[#b3b5ff]"><span className="font-bold">manage</span> every part of</p>
            <p className="text-[36px] md:text-[48px] leading-[1.1] font-light tracking-[-2px] text-[#7474A6] dark:text-[#b3b5ff]">your <span className="font-bold">legal work</span></p>
          </div>

          <p className="text-[18px] md:text-[20px] leading-[34px] text-[#3341FF] dark:text-[#8c95ff]">Track matters, coordinate schedules, manage clients, centralize documents, and handle communication - all in one system.</p>

          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center rounded-full bg-[#3341FF] shadow-xl px-6 py-3 gap-3">
              <ReceiptText size={22} className="text-white flex-shrink-0" />
              <span className="text-[22px] md:text-[24px] font-semibold text-white">Billing</span>
            </div>
            <div className="flex items-center rounded-full bg-[#E57D28] shadow-xl px-6 py-3 gap-3">
              <Gavel size={22} className="text-white flex-shrink-0" />
              <span className="text-[22px] md:text-[24px] font-semibold text-white">Matters</span>
            </div>
            <div className="flex items-center rounded-full bg-[#9C9BED] dark:bg-[#2b2d5b] shadow-xl px-5 py-2.5 gap-3">
              <div className="w-[5px] h-10 rounded-full bg-[#E57D28] flex-shrink-0" />
              <img src="./image.png" alt="avatar" className="w-10 h-10 rounded-full flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-[15px] font-semibold text-[#22234B] dark:text-white">John Doe - Portal</p>
                <p className="text-[11px] text-[#64658d] dark:text-[#c8cbff]">Hey! Could you please review a document for me?</p>
                <span className="text-[10px] text-[#73749a] dark:text-[#9ea3ff]">MAT-2233 · 2 h ago</span>
              </div>
            </div>
            <div className="flex items-center rounded-full bg-[#2D234D] shadow-xl px-6 py-3 gap-3">
              <ListChecks size={22} color="#F48B2D" className="flex-shrink-0" />
              <span className="text-[22px] md:text-[24px] font-semibold text-[#F48B2D]">Tasks</span>
            </div>
            <div className="flex items-center rounded-full bg-[#2D234D] shadow-xl px-6 py-3 gap-3">
              <FileText size={22} color="#F48B2D" className="flex-shrink-0" />
              <span className="text-[22px] md:text-[24px] font-semibold text-[#F48B2D]">Documents</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}