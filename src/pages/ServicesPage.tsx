import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

interface Service {
  name: string;
  description: string;
  pricing: string[];
}

interface ServiceCategory {
  title: string;
  subtitle: string;
  description: string;
  services: Service[];
}

const categories: ServiceCategory[] = [
  {
    title: 'Consumable Offerings',
    subtitle: 'Short-Term Impact',
    description:
      'Designed for short-term use and quick audience engagement. These videos are frequently updated or replaced to maintain audience interest.',
    services: [
      {
        name: 'Content Strategy & Planning',
        description:
          'Data-driven strategy sessions and quarterly planning to align your video content with business goals.',
        pricing: ['Monthly Strategy Sessions: $2,000 – $4,000', 'Quarterly Planning: $5,000+'],
      },
      {
        name: 'Social Media Video Content',
        description:
          'Engaging short-form videos for TikTok, Instagram Reels, and Facebook Stories that capture attention.',
        pricing: [
          'Basic: $2,000/mo (10 videos)',
          'Standard: $3,800/mo (20 videos)',
          'Premium: $5,600/mo (30 videos)',
        ],
      },
      {
        name: 'Ad Campaign Videos',
        description:
          'Targeted video ads for Facebook, Google, and YouTube designed to drive conversions.',
        pricing: ['30-Second Ad: $5,000', 'Additional Variations: +$1,000 each'],
      },
      {
        name: 'Product Launch Videos',
        description:
          'Compelling videos to announce and showcase new products or services with maximum impact.',
        pricing: ['Single Video: $5,000 – $10,000', 'Multi-Video Package: Custom pricing'],
      },
      {
        name: 'Event Coverage',
        description:
          'Capture highlights and key moments of events for promotional purposes.',
        pricing: ['Single Event Recap: $10,000+ (2–4 min)', 'Multiple Events: Custom retainer'],
      },
      {
        name: 'Testimonial & Case Study Videos',
        description:
          'Powerful customer testimonials and detailed case studies that build trust and credibility.',
        pricing: ['Single Testimonial: $2,000', 'Package of 6: $12,000+'],
      },
      {
        name: 'Training & Tutorial Videos',
        description:
          'Informative and easy-to-follow training content for teams and customers.',
        pricing: ['Single Video: $10,000+', 'Series Package: Custom pricing'],
      },
      {
        name: 'Email Marketing Videos',
        description:
          'Engaging video content designed to boost open rates and conversions in email campaigns.',
        pricing: ['Single Video: $3,000+', 'Monthly Package: $5,000+'],
      },
      {
        name: 'Content Repurposing',
        description:
          'Transform existing long-form content into bite-sized videos for maximum reach.',
        pricing: ['Per Video: $1,000 – $3,000', 'Monthly Retainer: $4,000+'],
      },
    ],
  },
  {
    title: 'Retainer Offerings',
    subtitle: 'Ongoing Engagement',
    description:
      'Ongoing services provided on a monthly basis, ensuring a continuous flow of content and sustained audience engagement.',
    services: [
      {
        name: 'Monthly Video Retainer',
        description:
          'Ongoing video production services on a monthly basis to keep your content pipeline full.',
        pricing: [
          'Small: $2,000/mo (5 videos)',
          'Medium: $4,000/mo (10 videos)',
          'Large: $7,500/mo (20 videos)',
        ],
      },
      {
        name: 'Social Media Management',
        description:
          'Comprehensive social media management including video content creation and strategy development.',
        pricing: ['Basic: $2,000/mo', 'Comprehensive: $5,000/mo (strategy + analytics)'],
      },
      {
        name: 'YouTube Channel Management',
        description:
          'Manage your YouTube channel including video uploads, optimization, and growth strategies.',
        pricing: ['Basic: $3,000/mo', 'Advanced: $6,000/mo (growth strategies)'],
      },
      {
        name: 'Podcast Video Production',
        description:
          'Produce high-quality video podcasts to complement audio content and expand your reach.',
        pricing: ['Per Episode: $1,500 – $3,000', 'Monthly (weekly episodes): $5,000+'],
      },
      {
        name: 'Corporate Communication Videos',
        description:
          'Professional videos for internal communication to keep teams informed and aligned.',
        pricing: ['Single Video: $3,000+', 'Quarterly Package: $10,000+'],
      },
    ],
  },
  {
    title: 'Non-Consumable Offerings',
    subtitle: 'Lasting Value',
    description:
      'One-time services that provide long-lasting value. Used for significant events, corporate branding, and key messaging with longer lifespans.',
    services: [
      {
        name: 'Brand Story Videos',
        description:
          'A powerful brand story video to convey your company mission, values, and identity.',
        pricing: ['Single Video: $8,000 – $20,000', 'Complete Package: Includes repurposing for reels'],
      },
      {
        name: 'Corporate Identity Videos',
        description:
          'Videos highlighting corporate identity, mission statements, and key messages.',
        pricing: ['Single Video: $10,000+', 'Complete Package: Shorter versions + reels'],
      },
      {
        name: 'Website Introduction Videos',
        description:
          'Engaging videos for website landing pages to welcome visitors and introduce your brand.',
        pricing: ['Single Video: $5,000+', 'With Additional Edits: Custom pricing'],
      },
      {
        name: 'Product Explainer Videos',
        description:
          'Detailed explainer videos showcasing product features and benefits.',
        pricing: ['Single Video: $5,000 – $10,000', 'Complete Package: Shorter versions + reels'],
      },
      {
        name: 'Investor Pitch Videos',
        description:
          'Professional videos for investor presentations to communicate business potential.',
        pricing: ['Single Video: $10,000+', 'Complete Package: Custom pricing'],
      },
      {
        name: 'Documentary Production',
        description:
          'In-depth documentary-style videos to tell compelling stories and provide detailed insights.',
        pricing: ['Single Project: $20,000+', 'Full Documentary: Custom pricing'],
      },
      {
        name: 'Video Commercials',
        description:
          'High-production-value commercials for TV or online advertising campaigns.',
        pricing: ['Single Commercial: $10,000+', 'Campaign Package: Custom pricing'],
      },
      {
        name: 'One-Time Event Videos',
        description:
          'Capture the essence of significant one-time events with high-quality professional video content.',
        pricing: ['Single Event: $10,000+', 'Multiple Events: Custom pricing'],
      },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: 'easeOut' },
  }),
};

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Services & Pricing | R Flow Productions';
    return () => {
      document.title = 'R Flow Productions';
    };
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-maroon pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6"
          >
            Services & Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto"
          >
            From short-form social content to full-scale documentary production, we offer
            strategic video solutions tailored to your business goals and budget.
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      {categories.map((category, catIdx) => (
        <section
          key={category.title}
          className={catIdx % 2 === 0 ? 'bg-surface-muted' : 'bg-white'}
        >
          <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block bg-brand-maroon/10 text-brand-maroon text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                {category.subtitle}
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-dark-500 mb-4">
                {category.title}
              </h2>
              <p className="text-dark-300 max-w-2xl mx-auto">{category.description}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {category.services.map((service, svcIdx) => (
                <motion.div
                  key={service.name}
                  custom={svcIdx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={fadeUp}
                  className="bg-white rounded-xl p-6 shadow-medium hover:shadow-strong transition-shadow border border-surface-border"
                >
                  <h3 className="font-display text-lg text-dark-500 mb-2">{service.name}</h3>
                  <p className="text-dark-300 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-1.5">
                    {service.pricing.map((tier) => (
                      <li
                        key={tier}
                        className="flex items-start text-sm"
                      >
                        <span className="text-brand-red mr-2 mt-0.5 font-bold">&#8226;</span>
                        <span className="text-dark-400">{tier}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="bg-brand-maroon py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Book a free 15-minute strategy session and let's discuss how we can bring your
              vision to life with strategic video storytelling.
            </p>
            <Button
              onClick={() =>
                window.open('https://calendly.com/sjackson2409/15min', '_blank')
              }
              variant="primary"
              size="large"
            >
              Book Your Strategy Session
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
