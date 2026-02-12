import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Target, Eye, Award, Users, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-28 md:pt-36 pb-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto text-center">
            <motion.p variants={fadeInUp} className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">About Us</motion.p>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Committed to Your Health
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
              XIDS Diagnostics Services is a trusted medical laboratory in Awka, Anambra State, providing comprehensive diagnostic testing with a commitment to accuracy, speed, and patient care.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div variants={fadeInUp} className="bg-card rounded-xl p-8 card-shadow border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-card-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide accessible, accurate, and affordable medical diagnostic services that empower healthcare decisions and improve patient outcomes across Anambra State and beyond.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-card rounded-xl p-8 card-shadow border border-border">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-display font-bold text-card-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and preferred diagnostics center in South-East Nigeria, recognized for excellence, innovation, and patient-centered care.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Why XIDS</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Why Choose XIDS Diagnostics</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Shield, title: "Quality Assured", desc: "We follow strict quality control protocols to ensure every result is accurate and reliable." },
                { icon: Award, title: "Experienced Team", desc: "Our laboratory professionals bring years of experience and dedication to every test." },
                { icon: Users, title: "Patient First", desc: "We prioritize patient comfort, privacy, and satisfaction in every interaction." },
                { icon: CheckCircle, title: "Fast Results", desc: "We understand urgency. Most results are delivered within 24 to 48 hours." },
                { icon: Target, title: "Affordable Pricing", desc: "Quality diagnostics at competitive prices accessible to all patients." },
                { icon: Eye, title: "Modern Equipment", desc: "State-of-the-art diagnostic equipment for precise and reliable testing." },
              ].map((item) => (
                <motion.div key={item.title} variants={fadeInUp} className="bg-card rounded-xl p-6 card-shadow border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications placeholder */}
      <section className="section-padding">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeInUp} className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Credentials</motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">Professional Accreditation</motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed mb-8">
              XIDS Diagnostics Services operates in compliance with relevant Nigerian healthcare regulations and standards, ensuring that all diagnostic procedures meet professional benchmarks for quality and safety.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              {["Medical Lab Council of Nigeria", "ISO Compliant", "NAFDAC Registered"].map((badge) => (
                <div key={badge} className="bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full text-sm font-medium">
                  {badge}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
