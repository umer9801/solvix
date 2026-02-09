import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import AutomationPricingSection from '@/components/automation-pricing-section';
import Link from 'next/link';
import { ArrowRight, Zap, CheckCircle, Target } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'n8n Automation Services - Solvix Core',
  description: 'Powerful workflow automation and integration platform for your business.',
};

export default function N8nService() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-main.jpg"
            alt="n8n automation"
            fill
            className="object-cover brightness-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-down space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-4">
              <Zap className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              n8n <span className="text-primary">Automation</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Streamline your workflows with powerful automation and integration. Connect your tools, eliminate manual tasks, and scale your operations effortlessly.
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

      {/* Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-bold text-foreground mb-6">Why n8n Automation?</h2>
              <div className="space-y-4">
                {[
                  'Eliminate repetitive manual tasks and reduce human error',
                  'Connect 400+ applications with visual workflow builder',
                  'Improve efficiency and reduce operational costs',
                  'Scale your business processes without additional staff',
                  'Real-time data synchronization across platforms',
                  'Custom logic and complex workflow automation',
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
                src="/service-ai.jpg"
                alt="n8n automation"
                width={500}
                height={400}
                className="rounded-xl shadow-2xl shadow-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our n8n Solutions</h2>
            <p className="text-foreground/70 text-lg">
              Comprehensive automation services tailored to your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Workflow Automation',
                description: 'Design and deploy complex automated workflows that connect your business systems seamlessly.',
              },
              {
                title: 'API Integration',
                description: 'Connect and synchronize data between your applications using n8n{"\'"}s powerful API capabilities.',
              },
              {
                title: 'Data Processing',
                description: 'Transform, validate, and process data flows with advanced data manipulation features.',
              },
              {
                title: 'Error Handling',
                description: 'Implement robust error handling and monitoring to ensure reliable workflow execution.',
              },
              {
                title: 'Scheduled Automations',
                description: 'Set up time-based workflows that execute automatically on your preferred schedule.',
              },
              {
                title: 'Webhook Integration',
                description: 'Trigger workflows instantly from external systems using webhooks and event-driven architecture.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">Common Use Cases</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'Automated form processing and lead capture',
              'Multi-platform data synchronization',
              'Invoice and expense automation',
              'Social media content scheduling',
              'Email marketing workflows',
              'Customer relationship automation',
              'Database backup and migration',
              'Report generation and distribution',
              'Inventory management automation',
            ].map((useCase, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 text-center animate-scale-in"
                style={{ animationDelay: `${index * 40}ms` }}
              >
                <p className="text-foreground/80 font-medium">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Let our experts design the perfect automation solution for your needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-primary/50"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>

      {/* n8n Automation Pricing Section */}
      <AutomationPricingSection />

      <Footer />
    </div>
  );
}
