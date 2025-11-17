import { Link } from 'react-router-dom';
import { ScrollFade } from './ScrollFade';
import { Mail, Phone, MapPin } from 'lucide-react';
import { BehanceButton, DribbbleButton, LinkedInButton, InstagramButton, XButton } from './SocialButtons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
          {/* Logo & About */}
          <ScrollFade direction="up" className="md:col-span-2">
            <div>
              <div className="bg-white text-gray-900 px-4 py-2 rounded-full w-fit mb-4">
                Qasim A.
              </div>
              <p className="text-gray-400 mb-3">
                Designing clean and functional experiences.
              </p>
              <p className="text-gray-500 mb-6">
                UI/UX Designer based in Pakistan, specializing in web and mobile product design.
              </p>
              
              {/* Social Media Buttons */}
              <div className="flex items-center gap-3 flex-wrap">
                <BehanceButton href="https://www.behance.net/qasimali-uxui" />
                <DribbbleButton href="https://dribbble.com/QasimAli-UXUI" />
                <LinkedInButton href="https://www.linkedin.com/in/uxui-qasimali/" />
                <InstagramButton href="https://www.instagram.com/uxui.qasimali/" />
                <XButton href="https://x.com/uxui_qasimali" />
              </div>
            </div>
          </ScrollFade>

          {/* Quick Links */}
          <ScrollFade direction="up" delay={0.1}>
            <div>
              <h3 className="text-lg mb-4">Quick Links</h3>
              <nav className="flex flex-col gap-3">
                <Link to="/" className="text-gray-400 hover:text-lime-400 transition-colors">
                  Home
                </Link>
                <Link to="/#about" className="text-gray-400 hover:text-lime-400 transition-colors">
                  About
                </Link>
                <Link to="/services" className="text-gray-400 hover:text-lime-400 transition-colors">
                  Services
                </Link>
                <Link to="/projects" className="text-gray-400 hover:text-lime-400 transition-colors">
                  Projects
                </Link>
                <Link to="/contact" className="text-gray-400 hover:text-lime-400 transition-colors">
                  Contact
                </Link>
              </nav>
            </div>
          </ScrollFade>

          {/* Contact */}
          <ScrollFade direction="up" delay={0.2}>
            <div>
              <h3 className="text-lg mb-4">Contact</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:uxui.qasimali@gmail.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-lime-400 transition-colors"
                >
                  <Mail size={18} />
                  <span className="break-all">uxui.qasimali@gmail.com</span>
                </a>
                <a
                  href="tel:+923346020251"
                  className="flex items-center gap-2 text-gray-400 hover:text-lime-400 transition-colors"
                >
                  <Phone size={18} />
                  +92 334 6020251
                </a>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin size={18} />
                  Rawalpindi, Pakistan
                </div>
              </div>
            </div>
          </ScrollFade>
        </div>

        {/* Bottom Bar */}
        <ScrollFade direction="up" delay={0.3}>
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © {currentYear} Qasim Ali. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <Link to="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-500 hover:text-gray-300 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </ScrollFade>
      </div>
    </footer>
  );
}
