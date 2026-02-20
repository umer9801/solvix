import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import AIPricingSection from '@/components/ai-pricing-section';
import Link from 'next/link';
import { ArrowRight, Brain, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'AI Solutions Services - Solvix Core',
  description: 'Custom AI implementations and machine learning solutions.',
};

export default function AISolutionsService() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/backgrounds/services.webp"
            alt="AI Solutions"
            fill
            className="object-cover brightness-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-down space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-4">
              <Brain className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              <span className="text-primary">AI</span> Solutions
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Custom artificial intelligence implementations powered by cutting-edge machine learning. Transform your business with intelligent automation.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-primary/50"
            >
              Get Started <ArrowRight className="inline ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-bold text-foreground mb-6">Why AI Solutions?</h2>
              <div className="space-y-4">
                {[
                  'Automate complex tasks with intelligent systems',
                  'Extract valuable insights from your data',
                  'Improve decision-making with predictive analytics',
                  'Enhance customer experiences with personalization',
                  'Reduce operational costs through automation',
                  'Identify patterns and opportunities in your data',
                  'Scale operations without proportional cost increase',
                  'Competitive advantage through AI-powered innovation',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fade-in-right">
              <Image
                src="/backgrounds/services.webp"
                alt="AI Solutions"
                width={500}
                height={400}
                className="rounded-xl shadow-2xl shadow-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our AI Capabilities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Predictive Analytics',
                description: 'Forecast trends, customer behavior, and market movements.',
              },
              {
                title: 'Computer Vision',
                description: 'Image recognition, object detection, and visual analysis.',
              },
              {
                title: 'Natural Language Processing',
                description: 'Text analysis, sentiment analysis, and language understanding.',
              },
              {
                title: 'Recommendation Systems',
                description: 'Personalized recommendations based on user behavior and preferences.',
              },
              {
                title: 'Anomaly Detection',
                description: 'Identify unusual patterns and potential fraud or issues.',
              },
              {
                title: 'Data Analysis & Insights',
                description: 'Deep data analytics to uncover hidden business opportunities.',
              },
            ].map((solution, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <h3 className="text-xl font-bold text-foreground mb-3">{solution.title}</h3>
                <p className="text-foreground/70">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Unlock the Power of AI for Your Business
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Let's explore how AI can transform your operations and drive growth.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-primary/50"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>

      {/* AI Pricing Section */}
      <AIPricingSection />

      <Footer />
    </div>
  );
}
