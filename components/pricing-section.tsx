'use client';

import { useState } from 'react';
import { Check, Zap } from 'lucide-react';

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Standard',
      monthlyPrice: 49,
      yearlyPrice: 499,
      features: [
        '10 Posts',
        'Post Every 3 days',
        'Facebook',
        'Instagram',
        'Tiktok',
        'X (Twitter)',
        'Google \'My Business\'',
        'LinkedIn',
        'Custom-Tailored Content',
        'Captions & Hashtags',
        'Personal Dashboard',
        '2 Monthly Revisions',
        '9 - 5 Digital Support (EST)',
      ],
    },
    {
      name: 'Professional',
      monthlyPrice: 79,
      yearlyPrice: 799,
      features: [
        '15 Posts',
        'Post Every 2 days',
        'Facebook',
        'Instagram',
        'Tiktok',
        'X (Twitter)',
        'Google \'My Business\'',
        'LinkedIn',
        'Custom-Tailored Content',
        'Captions & Hashtags',
        'Personal Dashboard',
        '2 Monthly Revisions',
        '9 - 5 Digital Support (EST)',
        'AI Content Creation',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      monthlyPrice: 129,
      yearlyPrice: 1299,
      features: [
        '30 Posts',
        'Post Everyday',
        'Facebook',
        'Instagram',
        'Tiktok',
        'X (Twitter)',
        'Google \'My Business\'',
        'LinkedIn',
        'Custom-Tailored Content',
        'Captions & Hashtags',
        'Personal Dashboard',
        '2 Monthly Revisions',
        '9 - 5 Digital Support (EST)',
        'Weekly Social Media Videos',
        'AI Content Creation',
        'Access To Social Media Reports',
      ],
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background premium effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-cyan-400 to-foreground bg-clip-text text-transparent">
            Social Media Marketing Plans
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto mb-8">
            Comprehensive social media management to grow your brand and engage your audience
          </p>
          <p className="text-cyan-400 font-semibold text-sm mb-8">All prices in CAD (Canadian Dollars)</p>

          {/* Premium Toggle Switch */}
          <div className="flex items-center justify-center gap-6">
            <span className={`text-lg font-semibold transition-colors duration-300 ${!isYearly ? 'text-cyan-400' : 'text-foreground/60'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="group relative w-16 h-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-background hover:shadow-lg hover:shadow-cyan-500/20 border border-cyan-400/30"
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full transition-transform duration-300 shadow-lg shadow-cyan-500/50 ${isYearly ? 'translate-x-8' : 'translate-x-0'
                  }`}
              />
            </button>
            <span className={`text-lg font-semibold transition-colors duration-300 ${isYearly ? 'text-cyan-400' : 'text-foreground/60'}`}>
              Yearly
              <span className="ml-2 text-xs bg-gradient-to-r from-cyan-500 to-green-500 text-white px-2 py-1 rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group animate-scale-in transition-all duration-500 hover:scale-105`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect for popular */}
              {plan.popular && (
                <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/30 via-purple-500/20 to-cyan-500/30 rounded-2xl blur-xl opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
              )}

              <div
                className={`relative card-premium p-8 h-full backdrop-blur-xl transition-all duration-300 ${plan.popular
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20'
                    : 'border-border/30 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-400/30'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg shadow-cyan-500/30">
                      <Zap size={16} />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${plan.popular ? 'text-cyan-400' : 'text-foreground'}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      ${isYearly ? Math.floor(plan.yearlyPrice / 12) : plan.monthlyPrice}
                    </span>
                    <span className="text-foreground/60 text-lg">/mo</span>
                  </div>
                  {isYearly && (
                    <p className="text-sm text-cyan-400 mt-3 font-medium">
                      Billed ${plan.yearlyPrice} yearly
                    </p>
                  )}
                </div>

                <div className="border-t border-cyan-400/20 pt-8 mb-8">
                  <p className="text-foreground/80 font-semibold mb-6">Includes:</p>
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 group/item">
                        <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                        <span className="text-foreground/70 group-hover/item:text-foreground/90 transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`/contact?service=marketing&plan=${encodeURIComponent(plan.name)}&price=${encodeURIComponent('$' + (isYearly ? Math.floor(plan.yearlyPrice / 12) : plan.monthlyPrice) + ' CAD/mo')}`}
                  className={`block w-full text-center px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 group/btn relative overflow-hidden ${plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50'
                      : 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 text-cyan-400 border border-cyan-400/30 hover:border-cyan-400/50'
                    }`}
                >
                  <span className="relative z-10">Get Started</span>
                  <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover/btn:left-full transition-all duration-500" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
