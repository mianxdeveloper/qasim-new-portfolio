import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, Phone } from 'lucide-react';
import { AnimatedButton } from '../components/AnimatedButton';
import { BehanceButton, DribbbleButton, LinkedInButton, InstagramButton, XButton } from '../components/SocialButtons';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', projectType: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-white px-4">Let's Bring Your Idea to Life</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Have a project in mind? Fill out the form below or reach out through any of the channels listed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-xl sm:text-2xl mb-6 sm:mb-8 text-white">Send a Message</h2>
              
              {submitted && (
                <div className="mb-6 p-4 bg-lime-50 border border-lime-200 rounded-full text-lime-700">
                  Thanks for reaching out! I'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 bg-gray-900 border border-gray-600 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 bg-gray-900 border border-gray-600 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Type
                  </label>
                  <div className="relative">
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3.5 pr-12 bg-gray-900 border border-gray-600 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent appearance-none cursor-pointer transition-all"
                    >
                      <option value="">Select a project type</option>
                      <option value="landing-page">Landing Page</option>
                      <option value="website">Website</option>
                      <option value="dashboard">Dashboard</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="redesign">Redesign</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 bg-gray-900 border border-gray-600 text-white rounded-3xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent resize-none transition-all"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <div className="pt-2">
                  <AnimatedButton 
                    text1="Send Message" 
                    text2="Submit Now" 
                    type="submit"
                    icon1={Send}
                    icon2={CheckCircle}
                    fullWidth
                    size="lg"
                  />
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 lg:space-y-6">
            {/* Direct Contact */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl mb-6 text-white">Get in Touch</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-lime-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-lime-400" size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm text-gray-400 mb-1">Email</div>
                    <a href="mailto:uxui.qasimali@gmail.com" className="text-white hover:text-lime-400 transition-colors break-words">
                      uxui.qasimali@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-lime-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-lime-400" size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm text-gray-400 mb-1">Phone</div>
                    <a href="tel:+923346020251" className="text-white hover:text-lime-400 transition-colors">
                      +92 334 6020251
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-lime-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-lime-400" size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm text-gray-400 mb-1">Location</div>
                    <div className="text-white">Rawalpindi, Pakistan</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl mb-6 text-white">Social Media</h2>
              <div className="flex items-center gap-3 flex-wrap">
                <BehanceButton href="https://www.behance.net/qasimali-uxui" />
                <DribbbleButton href="https://dribbble.com/QasimAli-UXUI" />
                <LinkedInButton href="https://www.linkedin.com/in/uxui-qasimali/" />
                <InstagramButton href="https://www.instagram.com/uxui.qasimali/" />
                <XButton href="https://x.com/uxui_qasimali" />
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-br from-gray-800 via-gray-800 to-lime-900/40 text-white rounded-2xl p-6 sm:p-8 border border-lime-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-lime-400 rounded-full animate-pulse"></div>
                <span className="text-lime-200 font-medium">Currently Available</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I'm currently accepting new projects and would love to hear about yours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
