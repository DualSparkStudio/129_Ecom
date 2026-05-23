import { Link } from 'react-router-dom';
import { Twitter, Instagram, Linkedin, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  Shop: [
    { label: 'All Products', href: '/#shop' },
    { label: 'Audio', href: '/#collections' },
    { label: 'Workspace', href: '/#collections' },
    { label: 'New Arrivals', href: '/#shop' },
  ],
  Company: [
    { label: 'About NEURON', href: '/#about' },
    { label: 'Careers', href: '/#contact' },
    { label: 'Press', href: '/#contact' },
    { label: 'Sustainability', href: '/#about' },
  ],
  Support: [
    { label: 'Contact', href: '/#contact' },
    { label: 'Shipping', href: '/#about' },
    { label: 'Returns', href: '/#contact' },
    { label: 'Warranty', href: '/#contact' },
  ],
};

const socials = [
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative border-t border-white/10 bg-gradient-to-b from-deep to-matte overflow-hidden"
    >
      <div className="absolute inset-0 bg-purple-glow pointer-events-none" />
      <div className="section-padding container-custom relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-display text-3xl font-bold tracking-tight inline-block mb-4"
            >
              NEUR<span className="text-electric">ON</span>
            </Link>
            <p className="text-white/50 max-w-sm mb-6 leading-relaxed">
              Pioneering the intersection of artificial intelligence and premium
              lifestyle technology. Built for those who demand more.
            </p>
            <div className="space-y-3 text-sm text-white/50">
              <a
                href="mailto:hello@neuron.tech"
                className="flex items-center gap-2 hover:text-electric-light transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@neuron.tech
              </a>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +1 (888) 638-7666
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                100 Innovation Drive, San Francisco, CA 94105
              </p>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-display font-semibold text-white mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} NEURON Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-full glass hover:bg-white/10 hover:text-electric-light transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
