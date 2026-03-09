import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import { Users, GraduationCap, BookOpen, Microscope, Quote, ArrowRight, UserPlus, MessageCircle, Star } from "lucide-react";

const memberGroups = [
  { icon: GraduationCap, label: "Students", count: "2,000+", description: "LIS students from across India building their careers." },
  { icon: BookOpen, label: "Librarians", count: "1,500+", description: "Practicing librarians in academic and public libraries." },
  { icon: Microscope, label: "Researchers", count: "800+", description: "Research scholars and doctoral candidates." },
  { icon: Users, label: "Academics", count: "500+", description: "Faculty and professors in LIS departments." },
];

const benefits = [
  { icon: UserPlus, title: "Professional Profile", description: "Create your professional profile and showcase your expertise." },
  { icon: Star, title: "Exclusive Programs", description: "Early access to workshops, conferences, and certification courses." },
  { icon: MessageCircle, title: "Networking", description: "Connect with peers, mentors, and industry leaders." },
  { icon: BookOpen, title: "Resource Access", description: "Full access to our research repository and knowledge base." },
];

const testimonials = [
  { quote: "The LIS Academy community has been instrumental in my research journey. The connections I've made here are invaluable.", name: "Dr. Meena Kapoor", role: "Assistant Professor, BHU" },
  { quote: "From a fresh graduate to a confident professional — LIS Academy's finishing school and community made it possible.", name: "Arjun Patel", role: "Digital Librarian, Infosys" },
  { quote: "The workshops and networking events are world-class. I've collaborated on three research papers through connections made here.", name: "Shalini Verma", role: "Research Scholar, IGNOU" },
];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }} className={className}>
      {children}
    </motion.div>
  );
}

export default function Community() {
  return (
    <PageLayout>
      <PageHeader tag="Community" title="Join Our Network" description="Connect with a thriving ecosystem of LIS professionals, researchers, and learners." />

      {/* Member Groups */}
      <section className="section-padding bg-[#0d1b3e]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">Our Ecosystem</h2>
              <p className="text-white/50 mt-2">A diverse community united by a passion for information science.</p>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {memberGroups.map((group, i) => (
              <FadeIn key={group.label} delay={i * 0.1}>
                <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:-translate-y-1 transition-all duration-300 text-center h-full">
                  <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-4" style={{ background: "rgba(201,168,76,0.15)" }}>
                    <group.icon style={{ color: "#c9a84c" }} size={24} />
                  </div>
                  <div className="text-2xl font-serif font-bold text-white mb-1">{group.count}</div>
                  <div className="text-sm font-semibold mb-2" style={{ color: "#c9a84c" }}>{group.label}</div>
                  <p className="text-xs text-white/50">{group.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="section-padding" style={{ background: "#091529" }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-[#c9a84c]/40 text-[#c9a84c] bg-[#c9a84c]/10 mb-4">Membership</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">Why Join?</h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <FadeIn key={benefit.title} delay={i * 0.1}>
                <div className="p-6 rounded-xl border border-white/10 bg-white/5 h-full">
                  <benefit.icon style={{ color: "#c9a84c" }} className="mb-4" size={24} />
                  <h3 className="font-serif text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{benefit.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.4}>
            <div className="text-center mt-12">
              <button
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-[#0d1b3e] hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-[#c9a84c]/20"
                style={{ background: "linear-gradient(135deg, #f0d080, #c9a84c)" }}
              >
                Become a Member <ArrowRight size={16} />
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[#0d1b3e]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-[#c9a84c]/40 text-[#c9a84c] bg-[#c9a84c]/10 mb-4">Testimonials</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">What Members Say</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <FadeIn key={item.name} delay={i * 0.1}>
                <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <Quote style={{ color: "#c9a84c", opacity: 0.5 }} className="mb-4" size={28} />
                  <p className="text-white/65 text-sm leading-relaxed mb-6 italic flex-1">"{item.quote}"</p>
                  <div>
                    <div className="font-semibold text-white text-sm">{item.name}</div>
                    <div className="text-xs text-white/40">{item.role}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
