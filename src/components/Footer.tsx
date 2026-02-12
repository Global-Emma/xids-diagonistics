import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg font-display">X</span>
              </div>
              <span className="font-display font-bold text-lg">XIDS Diagnostics</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Trusted medical diagnostics laboratory in Awka, delivering accurate and reliable results for your health needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-background/70 hover:text-background text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-background/70">
              <a href="tel:09060676975" className="flex items-center gap-2 hover:text-background transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                0906 067 6975
              </a>
              <a
                href="https://maps.google.com/?q=32+Ziks+Avenue+Amawbia+Awka+Anambra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-background transition-colors"
              >
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                32 Ziks Avenue, Amawbia, Awka, Anambra
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Hours</h4>
            <div className="flex flex-col gap-2 text-sm text-background/70">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Mon–Fri: 8AM – 6PM</span>
              </div>
              <div className="ml-6">Sat: 8AM – 4PM</div>
              <div className="ml-6">Sun: Closed</div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/50">
          © {new Date().getFullYear()} XIDS Diagnostics Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
