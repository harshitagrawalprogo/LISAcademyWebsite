import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import { Calendar, MapPin, Clock, Users, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const events = [
  { title: "National Conference on Digital Libraries 2026", date: "April 15–17, 2026", location: "New Delhi", type: "Conference", description: "India's premier conference on digital library technologies, open access, and information management.", speakers: ["Prof. A. Mehta", "Dr. S. Rao", "Dr. V. Singh"], agenda: ["Keynote Sessions", "Paper Presentations", "Panel Discussions", "Networking Dinner"] },
  { title: "Workshop on AI in Information Retrieval", date: "May 8–9, 2026", location: "Bangalore", type: "Workshop", description: "Hands-on workshop exploring machine learning applications in search, cataloging, and recommendation systems.", speakers: ["Dr. V. Singh", "Guest: Prof. S. Mitra (IISc)"], agenda: ["Introduction to AI/ML", "NLP for Libraries", "Hands-on Lab", "Capstone Exercise"] },
  { title: "Research Methodology Bootcamp", date: "June 1–5, 2026", location: "Online", type: "Training", description: "A 5-day intensive program covering qualitative, quantitative, and mixed-methods research design.", speakers: ["Dr. S. Rao", "Dr. P. Kumar"], agenda: ["Research Design", "Data Collection", "Statistical Analysis", "Academic Writing", "Publication Strategy"] },
  { title: "Annual LIS Professionals Meet", date: "July 20, 2026", location: "Mumbai", type: "Networking", description: "A day-long gathering of LIS professionals for networking, knowledge sharing, and community building.", speakers: ["Industry Panels", "Alumni Speakers"], agenda: ["Opening Ceremony", "Industry Talks", "Speed Networking", "Awards Ceremony"] },
  { title: "Digital Preservation Symposium", date: "August 12–13, 2026", location: "Chennai", type: "Symposium", description: "Exploring best practices in digital preservation, format migration, and heritage digitization.", speakers: ["Guest: Dr. K. Ramesh (British Library)", "Prof. A. Mehta"], agenda: ["Policy Frameworks", "Technical Standards", "Case Studies", "Group Workshop"] },
  { title: "Information Literacy Summit", date: "September 25, 2026", location: "Hyderabad", type: "Summit", description: "National summit on integrating information literacy into higher education curricula.", speakers: ["UGC Representatives", "Faculty Panel"], agenda: ["Framework Presentation", "Best Practices", "Curriculum Design Workshop", "Policy Discussion"] },
];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }} className={className}>
      {children}
    </motion.div>
  );
}

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [calMonth, setCalMonth] = useState(3);

  return (
    <PageLayout>
      <PageHeader tag="Events" title="Conferences & Workshops" description="Stay updated with our upcoming events, conferences, and professional development opportunities." />

      {/* Mini Calendar */}
      <section className="section-padding" style={{ background: "#091529" }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-2xl font-bold text-white">2026 Calendar</h2>
              <div className="flex gap-2 items-center">
                <button
                  onClick={() => setCalMonth(Math.max(0, calMonth - 1))}
                  disabled={calMonth === 0}
                  className="w-8 h-8 rounded-lg border border-white/15 bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all disabled:opacity-30"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="flex items-center px-4 text-sm font-medium text-white min-w-[100px] justify-center">{months[calMonth]}</span>
                <button
                  onClick={() => setCalMonth(Math.min(11, calMonth + 1))}
                  disabled={calMonth === 11}
                  className="w-8 h-8 rounded-lg border border-white/15 bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all disabled:opacity-30"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-3">
              {events.filter((e) => e.date.toLowerCase().includes(months[calMonth].toLowerCase())).length > 0 ? (
                events.filter((e) => e.date.toLowerCase().includes(months[calMonth].toLowerCase())).map((event) => (
                  <div key={event.title} className="p-4 rounded-lg border border-white/10 bg-white/5 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-xs font-medium" style={{ color: "#c9a84c" }}>{event.type}</span>
                      <h3 className="font-semibold text-white text-sm">{event.title}</h3>
                      <p className="text-xs text-white/40">{event.date} · {event.location}</p>
                    </div>
                    <button className="shrink-0 text-xs px-3 py-1.5 rounded-lg border border-white/15 text-white/60 hover:text-white hover:border-white/30 transition-all">Details</button>
                  </div>
                ))
              ) : (
                <p className="text-center text-white/40 py-6 text-sm">No events scheduled in {months[calMonth]}.</p>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* All Events */}
      <section className="section-padding bg-[#0d1b3e]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="mb-10">
              <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#c9a84c" }}>All Events</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">Upcoming Schedule</h2>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {events.map((event, i) => (
              <FadeIn key={event.title} delay={i * 0.05}>
                <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-white/20 transition-all">
                  <div className="p-6 cursor-pointer" onClick={() => setSelectedEvent(selectedEvent === i ? null : i)}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 bg-[#c9a84c]/15 text-[#c9a84c]">{event.type}</span>
                        <h3 className="font-serif text-xl font-semibold text-white">{event.title}</h3>
                        <p className="text-sm text-white/50 mt-1">{event.description}</p>
                      </div>
                      <div className="flex flex-col gap-2 text-sm text-white/40 shrink-0">
                        <span className="flex items-center gap-1.5"><Calendar size={14} /> {event.date}</span>
                        <span className="flex items-center gap-1.5"><MapPin size={14} /> {event.location}</span>
                      </div>
                    </div>
                  </div>

                  {selectedEvent === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-white/10 px-6 pb-6"
                    >
                      <div className="grid md:grid-cols-2 gap-8 pt-6">
                        <div>
                          <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                            <Clock size={14} /> Agenda
                          </h4>
                          <ul className="space-y-2">
                            {event.agenda.map((item, idx) => (
                              <li key={item} className="flex items-center gap-2 text-sm text-white/55">
                                <span className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold shrink-0" style={{ background: "rgba(201,168,76,0.18)", color: "#c9a84c" }}>{idx + 1}</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                            <Users size={14} /> Speakers
                          </h4>
                          <ul className="space-y-2">
                            {event.speakers.map((s) => (
                              <li key={s} className="text-sm text-white/55">• {s}</li>
                            ))}
                          </ul>
                          <button
                            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-[#0d1b3e] hover:-translate-y-0.5 transition-all"
                            style={{ background: "linear-gradient(135deg, #f0d080, #c9a84c)" }}
                          >
                            Register Now <ArrowRight size={14} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
