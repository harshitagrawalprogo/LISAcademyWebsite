import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, GraduationCap, Library, Users } from "lucide-react";
import { Link } from "react-router-dom";

const floatingCards = [
  { icon: BookOpen, label: "10,000+ Resources", delay: 0 },
  { icon: GraduationCap, label: "50+ Programs", delay: 0.2 },
  { icon: Library, label: "Expert Faculty", delay: 0.4 },
  { icon: Users, label: "5000+ Alumni", delay: 0.6 },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Rich layered background */}
      <div className="absolute inset-0 bg-[#0d1b3e]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,168,76,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 100% 100%, rgba(26,47,94,0.8) 0%, transparent 60%)",
        }}
      />

      {/* Animated bokeh orbs */}
      {[
        { w: 520, h: 520, l: "-8%", t: "5%", dur: 8 },
        { w: 360, h: 360, l: "60%", t: "-10%", dur: 11 },
        { w: 280, h: 280, l: "80%", t: "55%", dur: 9 },
        { w: 200, h: 200, l: "20%", t: "70%", dur: 13 },
      ].map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: orb.w,
            height: orb.h,
            left: orb.l,
            top: orb.t,
            background:
              i % 2 === 0
                ? "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(100,140,220,0.10) 0%, transparent 70%)",
          }}
          animate={{ y: [0, -24, 0], x: [0, 12, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: orb.dur, repeat: Infinity, ease: "easeInOut", delay: i * 1.2 }}
        />
      ))}

      {/* Fine dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-12 flex flex-col items-center text-center">

        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase border border-[#c9a84c]/40 text-[#c9a84c] bg-[#c9a84c]/10 backdrop-blur-sm">
            <BookOpen size={13} />
            India's Premier Library & Information Science Platform
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6"
        >
          <span className="text-white">Empowering the </span>
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, #f0d080 0%, #c9a84c 50%, #e8b84b 100%)" }}
          >
            Knowledge
          </span>
          <span className="text-white"> Keepers</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-white/55 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          World-class training, cutting-edge research, and a thriving professional community — all built to advance Library & Information Science in India and beyond.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <Button
            asChild
            size="lg"
            className="px-8 py-6 text-base font-semibold rounded-xl text-[#0d1b3e] shadow-lg shadow-[#c9a84c]/30 hover:shadow-[#c9a84c]/50 transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #f0d080 0%, #c9a84c 100%)" }}
          >
            <Link to="/programs">
              Explore Programs
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="px-8 py-6 text-base font-semibold rounded-xl bg-white/8 border border-white/20 text-white backdrop-blur-sm hover:bg-white/15 hover:border-white/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Link to="/community">Join Community</Link>
          </Button>
        </motion.div>

        {/* Floating stat cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl">
          {floatingCards.map(({ icon: Icon, label, delay }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 + delay }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-2 px-4 py-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm cursor-default"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(201,168,76,0.18)" }}
              >
                <Icon size={20} className="text-[#c9a84c]" />
              </div>
              <span className="text-white/75 text-xs font-medium text-center leading-tight">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
