'use client';

import { Check, X } from 'lucide-react';
import Link from 'next/link';

export default function CRMPricingSection() {
  const plans = [
    {
      name: 'Starter CRM',
      price: '$1,999',
      period: 'one-time',
      description: 'Perfect for small businesses starting with CRM',
      features: [
        'Basic contact management',
        'Lead tracking system',
        'Email integration',
        'Simple reporting dashboard',
        'Up to 3 users',
        'Mobile responsive',
        'Basic automation (5 workflows)',
        '30 days support',
      ],
      notIncluded: [
        'Advanced automation',
        'Custom integrations',
        'API access',
        'Priority support',
      ],
      popular: false,
    },
    {
      name: 'Professional CRM',
      price: '$4,999',
      period: 'one-time',
      description: 'Advanced CRM for growing businesses',
      features: [
        'Everything in Starter',
        'Advanced contact management',
        'Sales pipeline management',
        'Custom fields & modules',
        'Up to 10 users',
        'Advanced reporting & analytics',
        'Workflow automation (20 workflows)',
        'Email marketing integration',
        'Calendar & task management',
        'Document management',
        'API access',
        '90 days support',
      ],
      notIncluded: [
        'Custom AI features',
        'Dedicated account manager',
      ],
      popular: true,
    },
    {
      name: 'Enterprise CRM',
      price: '$9,999',
      period: 'one-time',
      description: 'Complete CRM solution for large organizations',
      features: [
        'Everything in Professional',
        'Unlimited users',
        'Custom module development',
        'Advanced AI automation',
        'Multi-department workflows',
        'Custom integrations (unlimited)',
        'Advanced security & permissions',
        'White-label options',
        'Custom reporting engine',
        'Dedicated account manager',
        'Priority support (24/7)',
        '1 year support & maintenance',
        'Training sessions included',
      ],
      notIncluded: [],
      popular: false,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            CRM Development Pricing
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Custom CRM solutions tailored to your business needs. One-time investment, lifetime value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-card border rounded-xl p-8 hover:shadow-2xl transition-all duration-300 animate-fade-in-up relative ${
                plan.popular
                  ? 'border-primary shadow-xl shadow-primary/20 scale-105'
                  : 'border-border hover:border-primary/50'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-foreground/60 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-foreground/60">/ {plan.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 opacity-50">
                    <X className="w-5 h-5 text-foreground/40 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/60 text-sm line-through">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className={`block w-full text-center py-3 rounded-lg font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl'
                    : 'bg-secondary text-foreground hover:bg-secondary/80 border border-border'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-foreground/60 mb-4">
            Need a custom solution? We can build exactly what you need.
          </p>
          <Link
            href="/contact"
            className="inline-block text-primary hover:text-primary/80 font-semibold underline"
          >
            Contact us for custom pricing
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-foreground/70">Custom Built</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-foreground/70">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">∞</div>
            <div className="text-foreground/70">Scalability</div>
          </div>
        </div>
      </div>
    </section>
  );
}
