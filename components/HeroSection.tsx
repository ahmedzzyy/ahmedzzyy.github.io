"use client";

import { ChevronDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:ahmed.sahigara@example.com",
      label: "Email",
      color: "hover:text-yellow-500",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/ahmed-sahigara",
      label: "LinkedIn",
      color: "hover:text-yellow-500",
    },
    {
      icon: Github,
      href: "https://github.com/ahmedzzyy",
      label: "GitHub",
      color: "hover:text-yellow-500",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 md:py-32 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-yellow-600/5 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div
        className={`w-full max-w-xl transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        {/* Luxury Business Card Container */}
        <div className="relative group">
          {/* Glowing border effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600/30 via-yellow-500/20 to-yellow-600/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>

          {/* Main Business Card */}
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 backdrop-blur-xl border border-yellow-600/40 hover:border-yellow-500/60 rounded-2xl transition-all duration-700 hover:shadow-2xl hover:shadow-yellow-600/30 overflow-hidden">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-32 h-32">
              <div className="absolute top-4 left-4 w-12 h-px bg-gradient-to-r from-yellow-600 to-transparent"></div>
              <div className="absolute top-4 left-4 w-px h-12 bg-gradient-to-b from-yellow-600 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32">
              <div className="absolute bottom-4 right-4 w-12 h-px bg-gradient-to-l from-yellow-600 to-transparent"></div>
              <div className="absolute bottom-4 right-4 w-px h-12 bg-gradient-to-t from-yellow-600 to-transparent"></div>
            </div>

            {/* Sparkle decoration */}
            <div className="absolute top-6 right-6 opacity-60 group-hover:opacity-100 transition-opacity">
              <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
            </div>

            {/* Card Content */}
            <div className="relative p-10 md:p-14 space-y-8">
              {/* Brand Mark / Logo Area */}
              <div className="flex items-center gap-3 animate-fade-in">
                <div className="w-1 h-12 bg-gradient-to-b from-yellow-600 via-yellow-500 to-transparent rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              </div>

              {/* Name - Primary focus */}
              <div className="space-y-3 animate-fade-in animation-delay-200">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight bg-gradient-to-br from-white via-gray-100 to-yellow-100 bg-clip-text text-transparent">
                  Ahmed Sahigara
                </h1>
              </div>

              {/* Tagline */}
              <div className="animate-fade-in animation-delay-300">
                <p className="text-sm md:text-base text-yellow-500/90 font-light tracking-wider uppercase">
                  Full Stack Developer & Problem Solver
                </p>
              </div>

              {/* Gold divider */}
              <div className="flex items-center gap-2 animate-fade-in animation-delay-400">
                <div className="h-px flex-1 bg-gradient-to-r from-yellow-600/50 via-yellow-600/20 to-transparent"></div>
              </div>

              {/* Social Links - Like business card contact info */}
              <div className="flex items-center gap-6 animate-fade-in animation-delay-500">
                {socialLinks.map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/social p-3 border border-yellow-600/30 rounded-lg ${link.color} hover:border-yellow-500 hover:bg-yellow-600/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1`}
                      aria-label={link.label}
                    >
                      <Icon className="w-5 h-5 text-gray-300 group-hover/social:text-yellow-500 transition-colors" />
                    </a>
                  );
                })}
              </div>

              {/* Call to action - Subtle */}
              <div className="pt-4 animate-fade-in animation-delay-600">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-yellow-500 transition-colors duration-300 group/cta"
                >
                  <span className="tracking-wide">Let's collaborate</span>
                  <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover/cta:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-600/40 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <ChevronDown className="w-5 h-5 text-yellow-600/60" />
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-500 {
          animation-delay: 500ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
