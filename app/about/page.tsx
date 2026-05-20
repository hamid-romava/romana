"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const partners = ["Company One", "Company Two", "Company Three", "Company Four", "Company Five"];

export default function AboutPage() {
  return (
      <main
        dir="rtl"
        style={{ ["--accent" as string]: accent }}
        className="min-h-screen bg-[#050505] text-white"
      >

      
      {/* Background Glow (عمق بخشیدن) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto space-y-32"
      >
        {/* بخش معرفی */}
        <motion.section variants={itemVariants} className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight">
            ما برای ساخت تجربه‌های دیجیتال ساده و دقیق اینجاییم.
          </h1>
          <p className="max-w-xl text-white/40 text-lg leading-8 font-light">
            تمرکز ما روی محصولاتی است که بی‌سر و صدا خوب کار می‌کنند؛
            شفاف، سریع و متناسب با نیاز واقعی.
          </p>
        </motion.section>

        {/* بخش تیم - با تعامل زنده */}
        <motion.section variants={itemVariants} className="space-y-8">
          <p className="text-xs tracking-[0.25em] uppercase text-white/25">روماوایی‌ها</p>
          <div className="space-y-2">
            {[
              { name: "حمید هاشمی", role: "Founder" },
              { name: "سارا احمدی", role: "Design" }
            ].map((person, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10, color: "#fff" }}
                className="flex items-baseline justify-between gap-6 border-b border-white/5 py-4 cursor-pointer group"
              >
                <span className="text-lg font-light text-white/70 group-hover:text-white transition-colors">{person.name}</span>
                <span className="text-white/30 text-sm">{person.role}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* بخش پارتنر */}
        <motion.section variants={itemVariants} className="space-y-8 overflow-hidden">
           <p className="text-xs tracking-[0.25em] uppercase text-white/25">برندهای که به ما اعتماد کردند</p>
           <div className="flex whitespace-nowrap mask-gradient">
            <motion.div 
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="flex gap-16 items-center"
            >
                {[...partners, ...partners].map((name, i) => (
                    <span key={i} className="text-2xl font-light italic text-white/20 hover:text-white transition-colors cursor-default">
                        {name}
                    </span>
                ))}
            </motion.div>
           </div>
        </motion.section>
      </motion.div>
    </main>
  );
}
