"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, ExternalLink, Check } from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("inbox.ahmed.s@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "inbox.ahmed.s@gmail.com",
      action: handleCopyEmail,
      actionLabel: copied ? "Copied!" : "Copy",
      href: "mailto:inbox.ahmed.s@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ahmed-sahigara",
      href: "https://linkedin.com/in/ahmed-sahigara",
      external: true,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ahmedzzyy",
      href: "https://github.com/ahmedzzyy",
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 px-4 max-w-6xl mx-auto">
      <div className="space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="section-heading">Let's Connect</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always open to exciting opportunities, interesting projects, and
            collaborations. Feel free to reach out. Let's create something
            amazing together.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {contacts.map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <div
                key={idx}
                className="p-8 border border-gray-700/50 hover:border-yellow-600/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-yellow-500 group-hover:text-yellow-400 transition-colors" />
                  <h3 className="text-lg font-medium text-white">
                    {contact.label}
                  </h3>
                </div>

                <p className="text-gray-300 text-sm mb-4 break-all">
                  {contact.value}
                </p>

                {contact.external ? (
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors text-sm font-medium"
                  >
                    Open <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    onClick={contact.action}
                    className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors text-sm font-medium"
                  >
                    {copied && contact.actionLabel === "Copied!" ? (
                      <>
                        <Check className="w-4 h-4" /> {contact.actionLabel}
                      </>
                    ) : (
                      contact.actionLabel
                    )}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="gold-divider pt-16">
          <div className="text-center space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-light text-white">
                Ready to collaborate?
              </h3>
              <p className="text-gray-400 max-w-xl mx-auto">
                Whether you have a question, an opportunity, or just want to say
                hello, I'd love to hear from you. Drop me an email and I'll get
                back to you as soon as possible.
              </p>
            </div>

            <a
              href="mailto:inbox.ahmed.s@gmail.com"
              className="inline-block premium-button"
            >
              Send Me an Email
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-400 text-sm border-t border-gray-700/30 pt-8">
          <p>
            Designed & Built by Ahmed Sahigara • © {new Date().getFullYear()} •
            All Rights Reserved
          </p>
          <p className="mt-2">Crafted with care 💖</p>
        </div>
      </div>
    </section>
  );
}
