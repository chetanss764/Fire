import { useEffect, useRef, useState } from 'react';
import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react';
import { contactConfig } from '../config';

const Contact = () => {
  if (!contactConfig.heading) return null;

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const whatsappLink = 'https://wa.me/919819110190';

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      {contactConfig.backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactConfig.backgroundImage})` }}
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
          {/* Left Side - Info */}
          <div
            className={`lg:w-1/2 text-white transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Logo */}
            <h2 className="font-serif text-5xl md:text-6xl lg:text-[80px] mb-8 leading-none">
              {contactConfig.heading}
            </h2>

            <p className="text-xl font-light leading-relaxed opacity-90 mb-12 max-w-md">
              {contactConfig.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-12">
              {contactConfig.location && (
                <div className="flex items-center gap-4">
                  <MapPin size={20} strokeWidth={1.5} className="text-[#8b6d4b]" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider opacity-60 mb-1">{contactConfig.locationLabel}</span>
                    <span className="font-light">{contactConfig.location}</span>
                  </div>
                </div>
              )}

              {contactConfig.email && (
                <div className="flex items-center gap-4">
                  <Mail size={20} strokeWidth={1.5} className="text-[#8b6d4b]" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider opacity-60 mb-1">{contactConfig.emailLabel}</span>
                    <a href={`mailto:${contactConfig.email}`} className="font-light hover:text-[#8b6d4b] transition-colors">
                      {contactConfig.email}
                    </a>
                  </div>
                </div>
              )}

              {contactConfig.phone && (
                <div className="flex items-center gap-4">
                  <Phone size={20} strokeWidth={1.5} className="text-[#8b6d4b]" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider opacity-60 mb-1">{contactConfig.phoneLabel}</span>
                    <a href={`tel:${contactConfig.phone}`} className="font-light hover:text-[#8b6d4b] transition-colors">
                      {contactConfig.phone}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - WhatsApp CTA */}
          <div
            className={`lg:w-1/2 max-w-md w-full transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="bg-white/10 border border-white/20 rounded-2xl p-10 text-center space-y-6">
              <p className="text-white text-lg font-light">
                Reach out instantly via WhatsApp for quotes, availability, or any product questions.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white font-medium text-sm rounded-full transition-all duration-300 hover:bg-[#1ebe57] shadow-lg"
              >
                <MessageCircle size={20} strokeWidth={1.5} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#25D366] text-white text-sm font-medium shadow-2xl shadow-black/20 transition-transform duration-200 hover:-translate-y-1"
      >
        <MessageCircle size={20} strokeWidth={1.5} />
        WhatsApp
      </a>
    </section>
  );
};

export default Contact;
