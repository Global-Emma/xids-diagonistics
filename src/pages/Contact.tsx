import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Mail, Send, Accessibility, Car, DoorOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Future integration: form submission
    alert("Thank you for your message! We will get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-28 md:pt-36 pb-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto text-center">
            <motion.p variants={fadeInUp} className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Contact Us</motion.p>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Get in Touch
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
              Have questions or want to book an appointment? Reach out to us.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-2xl font-display font-bold text-foreground mb-6">Contact Information</motion.h2>
              <div className="space-y-6">
                <motion.a
                  variants={fadeInUp}
                  href="tel:09060676975"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl card-shadow border border-border hover:card-shadow-hover transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold text-card-foreground">0906 067 6975</p>
                  </div>
                </motion.a>
                <motion.a
                  variants={fadeInUp}
                  href="https://maps.google.com/?q=32+Ziks+Avenue+Amawbia+Awka+Anambra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl card-shadow border border-border hover:card-shadow-hover transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="font-semibold text-card-foreground">32 Ziks Avenue, Amawbia, Awka</p>
                    <p className="text-sm text-muted-foreground">Inside INEC Office Amawbia</p>
                  </div>
                </motion.a>
                <motion.div variants={fadeInUp} className="flex items-center gap-4 p-4 bg-card rounded-xl card-shadow border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Hours</p>
                    <p className="font-semibold text-card-foreground">Mon–Fri: 8AM–6PM · Sat: 8AM–4PM</p>
                    <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                  </div>
                </motion.div>
              </div>

              {/* Accessibility */}
              <motion.div variants={fadeInUp} className="mt-8">
                <h3 className="text-lg font-display font-bold text-foreground mb-4">Accessibility</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { icon: Car, label: "Accessible Parking" },
                    { icon: DoorOpen, label: "Accessible Entrance" },
                    { icon: Accessibility, label: "Accessible Toilet" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg">
                      <item.icon className="w-5 h-5 text-accent" />
                      <span className="text-sm font-medium text-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="text-2xl font-display font-bold text-foreground mb-6">Send Us a Message</motion.h2>
              <motion.form variants={fadeInUp} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-card text-card-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-card text-card-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-card text-card-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
                      placeholder="080XXXXXXXX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-card text-card-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-0">
        <div className="w-full h-[400px] bg-muted">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.8!2d7.07!3d6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJOIDfCsDA0JzEyLjAiRQ!5e0!3m2!1sen!2sng!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="XIDS Diagnostics Services Location"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
