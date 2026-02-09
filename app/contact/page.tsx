'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Image from 'next/image';

function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Auto-select service from URL parameter
  useEffect(() => {
    const service = searchParams.get('service');
    const plan = searchParams.get('plan');
    const price = searchParams.get('price');
    
    if (service) {
      setFormData((prev) => ({
        ...prev,
        service: service,
      }));
    }
    
    // If plan and price are provided, add them to the message
    if (plan && price) {
      const planMessage = `I'm interested in the ${plan} plan (${price}).`;
      setFormData((prev) => ({
        ...prev,
        message: planMessage,
      }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-contact.jpg"
            alt="Contact hero"
            fill
            className="object-cover brightness-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-down space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
              Have a question or ready to start your project? We'd love to hear from you. Let's connect!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mail className="w-8 h-8" />,
                title: 'Email',
                content: 'info@solvixcore.com',
                link: 'mailto:info@solvixcore.com',
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: 'WhatsApp',
                content: '+1 (437) 889-8256',
                link: 'https://wa.me/14378898256',
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: 'Address',
                content: 'Suite 104 - 2 Gurdwara Road, Ottawa, ON K2E 1A2, Canada',
                link: '#',
              },
            ].map((info, index) => (
              <a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 cursor-pointer animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-primary mb-4 group-hover:scale-125 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{info.title}</h3>
                <p className="text-foreground/70">{info.content}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">Send us a Message</h2>
            <p className="text-foreground/70 text-lg">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          {/* Selected Plan Display */}
          {searchParams.get('plan') && searchParams.get('price') && (
            <div className="mb-8 p-4 sm:p-6 bg-primary/10 border border-primary rounded-xl animate-fade-in-up">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-xs sm:text-sm text-foreground/70 mb-1">Selected Plan:</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground break-words">{searchParams.get('plan')}</h3>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-xs sm:text-sm text-foreground/70 mb-1">Price:</p>
                  <p className="text-2xl sm:text-3xl font-bold text-primary">{searchParams.get('price')}</p>
                </div>
              </div>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-xl p-8 md:p-12 animate-fade-in-up"
          >
            {submitted && (
              <div className="mb-6 p-4 bg-primary/20 border border-primary rounded-lg animate-slide-in-up">
                <p className="text-primary font-semibold">
                  Thank you for your message! We'll contact you shortly.
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-foreground font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-foreground font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-foreground font-semibold mb-2">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
                  placeholder="+1 (437) 889-8256"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-foreground font-semibold mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
                  placeholder="Your company"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="service" className="block text-foreground font-semibold mb-2">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors duration-300"
              >
                <option value="">Select a service</option>
                <option value="seo">SEO Services</option>
                <option value="marketing">Social Media Marketing</option>
                <option value="video">Video Editing</option>
                <option value="web">Website Development</option>
                <option value="n8n">n8n Automation</option>
                <option value="langchain">LangChain Integration</option>
                <option value="openai">OpenAI Agent SDK</option>
                <option value="content">Content Creation</option>
                <option value="app">App Development</option>
                <option value="ai">AI Solutions</option>
                <option value="shopify">Shopify Store Design</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-foreground font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-primary/50"
            >
              Send Message <Send size={20} />
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Prefer to Talk Directly?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Reach out via email or WhatsApp for a quick response.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@solvixcore.com"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-primary/50"
            >
              Email Us
            </a>
            <a
              href="https://wa.me/14378898256"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-primary text-primary hover:bg-primary/10 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-foreground/70">Loading...</p>
        </div>
      </div>
    }>
      <ContactForm />
    </Suspense>
  );
}
