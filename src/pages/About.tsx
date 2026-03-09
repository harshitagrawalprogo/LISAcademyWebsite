import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import { Target, Eye, Lightbulb, Users, Award, BookOpen, Globe, Heart } from "lucide-react";

const timeline = [
  { year: "2008", title: "Foundation", text: "LIS Academy was established with a vision to transform library science education in India." },
  { year: "2012", title: "First National Conference", text: "Hosted the inaugural National Conference on Digital Libraries with 500+ attendees." },
  { year: "2016", title: "Research Wing", text: "Launched a dedicated research wing focusing on information retrieval and knowledge management." },
  { year: "2020", title: "Digital Transformation", text: "Pivoted to hybrid learning, reaching 10,000+ learners across the country." },
  { year: "2024", title: "Global Recognition", text: "Recognized by IFLA as a leading LIS training institution in South Asia." },
];

const leaders = [
  { name: "Prof. Anil Mehta", role: "Founder & Director", bio: "30+ years in library science. Former Head, Dept. of LIS, Delhi University." },
  { name: "Dr. Sunita Rao", role: "Academic Dean", bio: "Expert in digital curation and open access. Published 60+ research papers." },
  { name: "Dr. Vikram Singh", role: "Research Director", bio: "Specialist in AI-driven information retrieval and bibliometrics." },
  { name: "Ms. Kavita Joshi", role: "Head of Programs", bio: "Designed 25+ professional development programs for LIS professionals." },
];

const advisors = [
  "Prof. R.K. Sharma – IGNOU",
  "Dr. P. Nagabhushanam – INFLIBNET",
  "Prof. M. Krishnamurthy – ISI Bangalore",
  "Dr. S. Srinivasan – IIT Madras",
  "Prof. N. Laxman Rao – Osmania University",
  "Dr. A.R. Jha – NIT Rourkela",
];

const values = [
  { icon: BookOpen, title: "Academic Excellence", text: "Rigorous curriculum designed by leading scholars and practitioners." },
  { icon: Globe, title: "Global Perspective", text: "International collaborations bringing world-class knowledge to India." },
  { icon: Users, title: "Community First", text: "Building a supportive ecosystem for all information professionals." },
  { icon: Heart, title: "Inclusive Access", text: "Making quality LIS education accessible to all, regardless of background." },
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

const sectionDark = "section-padding bg-[#0d1b3e]";
const sectionDarker = "section-padding" ;

export default function About() {
  return (
    <PageLayout>
      <PageHeader tag="About Us" title="Our Story & Mission" description="Building the future of Library & Information Science in India since 2008." />

      {/* Mission, Vision, Purpose */}
      <section className={sectionDark}>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Target, title: "Mission", text: "To advance Library & Information Science through world-class training, impactful research, and a vibrant professional community." },
            { icon: Eye, title: "Vision", text: "To be the foremost institution shaping the future of information professionals globally." },
            { icon: Lightbulb, title: "Purpose", text: "To bridge the gap between traditional library science and modern information technology, empowering professionals for the digital age." },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(201,168,76,0.15)" }}>
                  <item.icon style={{ color: "#c9a84c" }} size={26} />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/55 leading-relaxed">{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ background: "#091529" }}>
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-[#c9a84c]/40 text-[#c9a84c] bg-[#c9a84c]/10 mb-4">Our Values</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">What We Stand For</h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="text-center p-6 rounded-2xl border border-white/8 bg-white/4 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-4" style={{ background: "rgba(201,168,76,0.13)" }}>
                    <item.icon style={{ color: "#c9a84c" }} size={24} />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={sectionDark}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-[#c9a84c]/40 text-[#c9a84c] bg-[#c9a84c]/10 mb-4">Our Journey</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">History & Milestones</h2>
            </div>
          </FadeIn>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10" />
            {timeline.map((item, i) => (
              <FadeIn key={item.year} delay={i * 0.1}>
                <div className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full -translate-x-1.5 mt-2 z-10" style={{ background: "#c9a84c" }} />
                  <div className="pl-10 md:pl-0 md:w-1/2">
                    <span className="font-bold text-sm" style={{ color: "#c9a84c" }}>{item.year}</span>
                    <h3 className="font-serif text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-white/50 mt-1">{item.text}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding" style={{ background: "#091529" }}>
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-[#c9a84c]/40 text-[#c9a84c] bg-[#c9a84c]/10 mb-4">Leadership</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">Meet Our Team</h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((person, i) => (
              <FadeIn key={person.name} delay={i * 0.1}>
                <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:-translate-y-1 transition-all duration-300 text-center">
                  <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: "rgba(201,168,76,0.15)" }}>
                    <Users style={{ color: "#c9a84c" }} size={30} />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-white">{person.name}</h3>
                  <p className="text-sm font-medium mb-2" style={{ color: "#c9a84c" }}>{person.role}</p>
                  <p className="text-xs text-white/50 leading-relaxed">{person.bio}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className={sectionDark}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-[#c9a84c]/40 text-[#c9a84c] bg-[#c9a84c]/10 mb-4">Advisory Board</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">Guided by Experts</h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {advisors.map((advisor) => (
                <div key={advisor} className="px-5 py-4 rounded-lg border border-white/10 bg-white/5 text-sm text-white/70">
                  <Award style={{ color: "#c9a84c" }} className="inline mr-2" size={14} />
                  {advisor}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </PageLayout>
  );
}
