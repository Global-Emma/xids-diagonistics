import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Droplets, Microscope, Heart, FlaskConical, Scan, Stethoscope, Baby, Dna, Syringe, Thermometer, Phone, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const services = [
  { icon: Droplets, name: "Blood Tests", desc: "Complete blood count (CBC), blood glucose, lipid profile, blood group, genotype, and other hematology tests.", category: "Hematology" },
  { icon: FlaskConical, name: "Chemical Pathology", desc: "Liver function tests (LFT), kidney function tests, electrolytes, uric acid, and metabolic panels.", category: "Chemistry" },
  { icon: Microscope, name: "Microbiology", desc: "Culture and sensitivity, urinalysis, stool microscopy, and infection screening.", category: "Microbiology" },
  { icon: Heart, name: "Cardiac Screening", desc: "ECG, cardiac enzyme markers, troponin, and cardiovascular risk assessments.", category: "Cardiology" },
  { icon: Scan, name: "Ultrasound Imaging", desc: "Abdominal, pelvic, obstetric ultrasound scans with detailed reports.", category: "Imaging" },
  { icon: Stethoscope, name: "Health Screenings", desc: "Pre-employment medicals, annual checkups, school health screenings, and wellness panels.", category: "Preventive" },
  { icon: Baby, name: "Pregnancy Tests", desc: "HCG testing, antenatal screening panels, and pregnancy-related diagnostics.", category: "Obstetrics" },
  { icon: Dna, name: "Hormonal Assays", desc: "Thyroid function tests, fertility hormones, testosterone, and endocrine panels.", category: "Endocrinology" },
  { icon: Syringe, name: "Infectious Disease", desc: "HIV, Hepatitis B & C, malaria, typhoid, and other infection screenings.", category: "Serology" },
  { icon: Thermometer, name: "COVID-19 Testing", desc: "Rapid antigen tests and PCR testing with timely results for travel and health.", category: "Virology" },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-28 md:pt-36 pb-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto text-center">
            <motion.p variants={fadeInUp} className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Our Services</motion.p>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Diagnostic Services
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
              From routine blood work to specialized screenings, we offer a comprehensive range of diagnostic services with accurate results.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {services.map((service) => (
              <motion.div
                key={service.name}
                variants={fadeInUp}
                className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">{service.category}</span>
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">{service.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              Need a Specific Test?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
              Call us to inquire about any test not listed here. We're happy to help.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:09060676975">
                  <Phone className="w-4 h-4" />
                  Call 0906 067 6975
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
