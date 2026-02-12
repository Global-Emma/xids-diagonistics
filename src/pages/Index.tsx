import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Star, ChevronRight, Shield, Award, Microscope, Heart, Droplets, Scan, FlaskConical, Stethoscope, Accessibility, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import heroImage from "@/assets/hero-lab.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const testimonials = [
  { name: "Adaeze O.", text: "Very professional service. Got my results quickly and accurately. Highly recommend!", rating: 5 },
  { name: "Chukwuma E.", text: "The staff are friendly and the facility is clean and modern. Best lab in Awka.", rating: 5 },
  { name: "Ngozi I.", text: "I appreciate the wheelchair accessibility. It makes visiting easy for my father.", rating: 5 },
  { name: "Emeka A.", text: "Fast turnaround time and very reliable results. My doctor trusts their diagnostics.", rating: 5 },
];

const faqs = [
  { q: "Do I need an appointment?", a: "Walk-ins are welcome during our operating hours. However, for specific tests, we recommend calling ahead at 0906 067 6975." },
  { q: "How long do results take?", a: "Most routine test results are available within 24-48 hours. Some specialized tests may take longer. We'll inform you of the expected turnaround time." },
  { q: "Do you accept health insurance?", a: "Yes, we work with several health insurance providers. Please contact us to confirm if your specific plan is accepted." },
  { q: "Is the facility wheelchair accessible?", a: "Yes! We have wheelchair-accessible parking, entrance, and restroom facilities to ensure comfortable access for all patients." },
];

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20 md:pt-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Modern medical laboratory" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-40">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm text-background/80 font-medium">4.8 rating · 15 reviews</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-display font-bold text-background leading-tight mb-6">
              Reliable Diagnostics You Can Trust
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-background/80 mb-8 max-w-lg leading-relaxed">
              Accurate medical testing with fast results. Your health is our priority at XIDS Diagnostics Services, Awka.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="tel:09060676975">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" className="border-background/40 text-background bg-background/10 hover:bg-background hover:text-foreground" asChild>
                <a href="https://maps.google.com/?q=32+Ziks+Avenue+Amawbia+Awka+Anambra" target="_blank" rel="noopener noreferrer">
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="-mt-12 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { icon: Clock, title: "Operating Hours", lines: ["Mon–Fri: 8AM – 6PM", "Sat: 8AM – 4PM", "Sun: Closed"] },
              { icon: MapPin, title: "Our Location", lines: ["32 Ziks Avenue, Amawbia", "Awka, Anambra", "Inside INEC Office Amawbia"] },
              { icon: Phone, title: "Get in Touch", lines: ["0906 067 6975", "Walk-ins Welcome", "Call to book ahead"] },
            ].map((card) => (
              <motion.div
                key={card.title}
                variants={fadeInUp}
                className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-shadow duration-300 border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <card.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">{card.title}</h3>
                {card.lines.map((line) => (
                  <p key={line} className="text-sm text-muted-foreground">{line}</p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.p variants={fadeInUp} className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">About Us</motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Your Trusted Diagnostics Partner in Awka
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed mb-8">
              XIDS Diagnostics Services is a leading medical laboratory in Awka, providing comprehensive diagnostic testing with accuracy and speed. Our state-of-the-art facility and experienced professionals ensure you receive reliable results you can count on.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button variant="outline" size="lg" asChild>
                <a href="/about">
                  Learn More About Us
                  <ChevronRight className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Our Services</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Comprehensive Diagnostic Testing</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Droplets, name: "Blood Tests", desc: "Complete blood count, glucose, lipid panel, and more." },
                { icon: Microscope, name: "Microscopy", desc: "Urinalysis, stool analysis, and microscopic examination." },
                { icon: Heart, name: "Cardiac Screening", desc: "ECG, cardiac markers, and heart health assessments." },
                { icon: FlaskConical, name: "Chemical Pathology", desc: "Liver function, kidney function, and electrolyte tests." },
                { icon: Scan, name: "Imaging", desc: "Ultrasound and other imaging diagnostics." },
                { icon: Stethoscope, name: "Health Screenings", desc: "Pre-employment, wellness checkups, and more." },
              ].map((service) => (
                <motion.div
                  key={service.name}
                  variants={fadeInUp}
                  className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border group hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">{service.name}</h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Trusted by Patients Across Anambra</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Shield, title: "Accurate Results", desc: "Quality-assured testing with precision equipment" },
                { icon: Clock, title: "Fast Turnaround", desc: "Most results ready within 24–48 hours" },
                { icon: Award, title: "4.8★ Rated", desc: "Highly rated by patients for quality care" },
                { icon: Accessibility, title: "Fully Accessible", desc: "Wheelchair-friendly parking, entrance & toilet" },
              ].map((item) => (
                <motion.div key={item.title} variants={fadeInUp} className="text-center p-6">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Testimonials</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">What Our Patients Say</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {testimonials.map((t) => (
                <motion.div
                  key={t.name}
                  variants={fadeInUp}
                  className="bg-card rounded-xl p-6 card-shadow border border-border"
                >
                  <div className="flex mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">"{t.text}"</p>
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Frequently Asked Questions</h2>
            </motion.div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div key={i} variants={fadeInUp} className="border border-border rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left font-medium text-foreground hover:bg-muted/50 transition-colors"
                  >
                    {faq.q}
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              Ready to Book Your Test?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
              Walk in during our operating hours or call us to schedule an appointment.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:09060676975">
                  <Phone className="w-4 h-4" />
                  Call 0906 067 6975
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="https://maps.google.com/?q=32+Ziks+Avenue+Amawbia+Awka+Anambra" target="_blank" rel="noopener noreferrer">
                  <MapPin className="w-4 h-4" />
                  Get Directions
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

export default Index;
