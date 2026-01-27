import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const links = {
    about: [
      { name: "Our Story", href: "#" },
      { name: "Our Team", href: "#" },
      { name: "Annual Reports", href: "#" },
      { name: "Careers", href: "#" },
    ],
    programs: [
      { name: "School Construction", href: "#" },
      { name: "Teacher Training", href: "#" },
      { name: "Nutrition Programs", href: "#" },
      { name: "Digital Learning", href: "#" },
    ],
    getInvolved: [
      { name: "Donate", href: "#" },
      { name: "Sponsor a Child", href: "#" },
      { name: "Volunteer", href: "#" },
      { name: "Partner With Us", href: "#" },
    ],
  };

  const socials = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-semibold">BrightFutures</span>
            </a>
            <p className="font-body text-secondary-foreground/80 leading-relaxed mb-6 max-w-sm">
              Empowering African children through education. Together, we're building 
              brighter futures, one child at a time.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-body text-sm">contact@brightfutures.org</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-body text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-body text-sm">123 Hope Street, New York, NY</span>
              </div>
            </div>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">About</h4>
            <ul className="space-y-3">
              {links.about.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-secondary-foreground/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Programs</h4>
            <ul className="space-y-3">
              {links.programs.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-secondary-foreground/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Get Involved</h4>
            <ul className="space-y-3">
              {links.getInvolved.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-secondary-foreground/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-body text-sm text-secondary-foreground/60">
            © 2024 BrightFutures. All rights reserved. | 501(c)(3) Nonprofit Organization
          </p>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
