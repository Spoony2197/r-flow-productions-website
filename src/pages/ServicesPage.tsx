import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Button from '../components/ui/Button';

interface Service {
  name: string;
  tagline: string;
  description: string;
  outcomes: string[];
}

interface ServiceCategory {
  title: string;
  subtitle: string;
  summary: string;
  services: Service[];
}

interface ServiceAccordionItemProps {
  service: Service;
  isOpen: boolean;
  toggleOpen: () => void;
}

const ServiceAccordionItem: React.FC<ServiceAccordionItemProps> = ({
  service,
  isOpen,
  toggleOpen,
}) => {
  return (
    <div className="border-b border-surface-border last:border-b-0">
      <button
        className="flex items-center justify-between w-full py-6 text-left"
        onClick={toggleOpen}
      >
        <div>
          <h3 className="font-display text-lg text-dark-500">{service.name}</h3>
          <p className="text-dark-300 text-sm mt-1">{service.tagline}</p>
        </div>
        <div className="ml-4 flex-shrink-0 text-dark-400">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-dark-400 pb-4">{service.description}</p>
        <p className="text-sm font-semibold text-brand-maroon mb-2">What you get:</p>
        <ul className="space-y-1.5 mb-6">
          {service.outcomes.map((outcome) => (
            <li key={outcome} className="flex items-start text-sm">
              <span className="text-brand-red mr-2 mt-0.5 font-bold">&#8226;</span>
              <span className="text-dark-400">{outcome}</span>
            </li>
          ))}
        </ul>
        <div className="text-center">
          <Button
            variant="primary"
            size="medium"
            onClick={() =>
              window.open('https://calendly.com/sjackson2409/15min', '_blank', 'noopener,noreferrer')
            }
          >
            Book a Strategy Call
          </Button>
          <p className="text-dark-300 text-xs mt-2">
            Free 15-minute session. No obligation.
          </p>
        </div>
      </div>
    </div>
  );
};

const categories: ServiceCategory[] = [
  {
    title: 'Consumable Offerings',
    subtitle: 'Content That Drives Action',
    summary:
      'Your competitors are posting content. You need content that converts. These are the videos that fill your pipeline, capture attention in the scroll, and turn viewers into clients \u2014 from social media that stops thumbs to ad campaigns that drive measurable ROI. Think of these as your always-active authority engine.',
    services: [
      {
        name: 'Content Strategy & Planning',
        tagline: 'Align every video with a measurable business outcome',
        description:
          "Most companies create videos and hope for the best. We build data-driven content roadmaps that connect every piece of video to a specific business goal \u2014 whether that's authority positioning, lead generation, or market expansion. Strategy first, cameras second.",
        outcomes: [
          'Clear quarterly content roadmap tied to revenue goals',
          'Psychology-driven messaging framework for your market',
          'Elimination of guesswork from your content pipeline',
        ],
      },
      {
        name: 'Social Media Video Content',
        tagline: 'Stop the scroll. Start the conversation.',
        description:
          "Your ideal clients scroll past hundreds of videos a day. Ours make them stop. We craft short-form content for TikTok, Instagram Reels, and Facebook Stories using psychology-driven hooks and narrative structures that don't just capture attention \u2014 they build recognition and trust with every view.",
        outcomes: [
          'Consistent brand presence that compounds authority over time',
          'Content engineered for engagement, not just impressions',
          'Platform-optimized videos that work with each algorithm',
        ],
      },
      {
        name: 'Ad Campaign Videos',
        tagline: 'Ads that convert because they connect',
        description:
          "Generic ads get skipped. Strategic ads get results. We produce targeted video campaigns for Facebook, Google, and YouTube that speak directly to your ideal client's motivations and pain points \u2014 turning ad spend into measurable client acquisition.",
        outcomes: [
          'Higher conversion rates through psychology-driven messaging',
          'Multiple variations tested for maximum ROI',
          "Videos built for the specific platform's buying psychology",
        ],
      },
      {
        name: 'Product Launch Videos',
        tagline: 'Make your launch impossible to ignore',
        description:
          "A product launch gets one shot at first impressions. We create launch videos that don't just announce \u2014 they build anticipation, communicate unique value, and position your offering as the obvious choice in your market.",
        outcomes: [
          'Strategic narrative that differentiates from competitors on day one',
          'Multi-format content for maximum launch coverage',
          'Emotional connection that drives early adoption',
        ],
      },
      {
        name: 'Event Coverage',
        tagline: 'Turn a single event into months of authority content',
        description:
          'Events are goldmines of content that most companies waste. We capture the energy, insights, and key moments of your events and transform them into a strategic content library that extends your authority far beyond the event itself.',
        outcomes: [
          'Professional highlight reels that showcase your industry presence',
          'Repurposable clips for social, email, and sales enablement',
          'Content that positions you as a thought leader in your space',
        ],
      },
      {
        name: 'Testimonial & Case Study Videos',
        tagline: 'Let your results speak through the people who lived them',
        description:
          'Nothing builds trust faster than hearing real people describe real transformations. We produce documentary-style testimonials and case studies that go beyond surface-level praise to tell the full story \u2014 the challenge, the solution, and the measurable outcome.',
        outcomes: [
          "Social proof that addresses your prospects' exact objections",
          'Authentic stories that create emotional connection and trust',
          'Versatile assets for your website, sales process, and social channels',
        ],
      },
      {
        name: 'Training & Tutorial Videos',
        tagline: 'Turn your expertise into scalable education',
        description:
          'Your knowledge is one of your most valuable business assets. We transform your expertise into clear, engaging training content that educates your team or your customers \u2014 reducing support costs, accelerating onboarding, and reinforcing your authority as the go-to expert.',
        outcomes: [
          'Professional training that scales without scaling your time',
          'Content that reduces repetitive questions and support tickets',
          'Educational authority that deepens client loyalty',
        ],
      },
      {
        name: 'Email Marketing Videos',
        tagline: 'Break through the inbox with video that demands attention',
        description:
          'Email open rates are declining across every industry. Video changes the equation. We create strategic video content designed specifically for email campaigns that boost open rates, increase click-throughs, and move prospects further down your sales pipeline.',
        outcomes: [
          'Higher open and click-through rates on your campaigns',
          'Personalized video touchpoints that nurture trust',
          'Content that differentiates your emails from every text-only competitor',
        ],
      },
      {
        name: 'Content Repurposing',
        tagline: 'One shoot. Dozens of strategic assets.',
        description:
          'You\'re sitting on a library of underutilized content. We take your existing long-form videos, webinars, and presentations and strategically break them into bite-sized, platform-optimized pieces that multiply your reach without multiplying your production budget.',
        outcomes: [
          "Maximum ROI from content you've already created",
          'Consistent posting schedule without constant new production',
          'Platform-specific edits that perform natively on each channel',
        ],
      },
    ],
  },
  {
    title: 'Retainer Offerings',
    subtitle: 'Your Always-On Strategic Partnership',
    summary:
      "Authority isn't built in a single shoot \u2014 it's built through consistent, strategic presence. Our retainer partnerships give you a dedicated video team that understands your brand, your audience, and your goals intimately. Just a sustained drumbeat of strategic storytelling that compounds your market position month after month.",
    services: [
      {
        name: 'Monthly Video Retainer',
        tagline: 'A dedicated video team that knows your brand inside out',
        description:
          'Inconsistent content kills momentum. Our monthly retainer gives you a reliable pipeline of strategic video content, produced by a team that already understands your brand, your audience, and your goals. No onboarding every project. No lost context. Just consistent authority-building.',
        outcomes: [
          'Predictable content flow that keeps your brand top-of-mind',
          'A team that improves with every month of partnership',
          'Flexible video allocation that adapts to your priorities',
        ],
      },
      {
        name: 'Social Media Management',
        tagline: 'Strategic social presence, handled completely',
        description:
          'Managing social media well requires more than just posting \u2014 it demands strategy, consistency, and deep understanding of what moves your specific audience. We handle the entire process from content creation to publishing to analytics, ensuring every post reinforces your authority positioning.',
        outcomes: [
          'Comprehensive strategy and execution across your channels',
          'Data-driven optimization that improves results month over month',
          'Consistent brand voice that builds recognition and trust',
        ],
      },
      {
        name: 'YouTube Channel Management',
        tagline: 'Turn your YouTube channel into an authority-building machine',
        description:
          'YouTube is the second largest search engine in the world, and it rewards strategic, consistent creators. We manage your entire channel \u2014 from content strategy and SEO optimization to upload scheduling and growth tactics \u2014 so your channel becomes a compounding asset for your brand.',
        outcomes: [
          'SEO-optimized content that ranks and gets discovered organically',
          'Strategic publishing cadence that builds subscriber loyalty',
          'Analytics-driven growth strategy tailored to your niche',
        ],
      },
      {
        name: 'Podcast Video Production',
        tagline: "Expand your podcast's reach with professional video",
        description:
          'Audio-only podcasts leave massive reach on the table. We produce high-quality video versions of your podcast that unlock YouTube, social media clips, and visual storytelling \u2014 transforming your conversations into a multi-platform authority engine.',
        outcomes: [
          'Professional multi-camera production that elevates your show',
          'Clip-ready highlights for social media distribution',
          'Full video episodes that open the YouTube discovery channel',
        ],
      },
      {
        name: 'Corporate Communication Videos',
        tagline: 'Keep your team aligned, informed, and inspired',
        description:
          'Internal communication shapes your culture, and culture shapes your results. We produce professional internal videos that go beyond memos and slide decks \u2014 creating content that truly engages your team, communicates vision effectively, and builds the internal alignment that drives external success.',
        outcomes: [
          'Higher engagement than traditional internal communications',
          'Consistent messaging across distributed teams',
          'Leadership visibility that strengthens company culture',
        ],
      },
    ],
  },
  {
    title: 'Non-Consumable Offerings',
    subtitle: 'Foundational Assets That Define Your Brand',
    summary:
      "These are the big, defining pieces \u2014 the videos that establish who you are and why you matter for years to come. From brand origin stories to investor pitches to full documentary productions, these strategic assets become the cornerstone of your authority. They don't expire. They position you as the definitive expert in your space, permanently.",
    services: [
      {
        name: 'Brand Story Videos',
        tagline: 'The definitive video that tells the world who you are',
        description:
          'Every brand has a story that sets it apart. Most never tell it well. We craft documentary-style brand films that go deep into your mission, values, and unique journey \u2014 creating the foundational piece of content that defines your market position and resonates with your ideal clients for years.',
        outcomes: [
          'A cornerstone asset that anchors all your marketing',
          'Emotional storytelling that creates lasting audience connection',
          'Authority positioning that separates you from every competitor',
        ],
      },
      {
        name: 'Corporate Identity Videos',
        tagline: 'Crystallize your mission into a visual statement',
        description:
          "Your corporate identity shouldn't live in a PDF. We translate your mission, values, and vision into compelling video that communicates who you are at a level text simply cannot achieve \u2014 creating a visual identity piece that strengthens every stakeholder relationship.",
        outcomes: [
          'Professional identity piece for investors, partners, and recruits',
          'Consistent brand messaging across all touchpoints',
          'A visual anchor for your corporate communications',
        ],
      },
      {
        name: 'Website Introduction Videos',
        tagline: 'Turn your homepage into your hardest-working salesperson',
        description:
          "You have seconds to capture a website visitor's attention. A strategic introduction video does what text and images alone cannot \u2014 it instantly communicates your value, builds trust, and guides visitors toward action. We create landing page videos that convert browsers into believers.",
        outcomes: [
          'Increased time-on-site and reduced bounce rates',
          'Immediate trust-building with first-time visitors',
          'Clear value communication that drives conversions',
        ],
      },
      {
        name: 'Product Explainer Videos',
        tagline: 'Make the complex compelling and the technical irresistible',
        description:
          "The most innovative products fail when people don't understand them. We create explainer videos that translate complex features into clear, emotionally resonant benefits \u2014 helping your prospects see exactly why your solution is the one they've been searching for.",
        outcomes: [
          'Simplified messaging that accelerates the sales cycle',
          'Visual storytelling that makes technical advantages tangible',
          'A versatile asset for sales, marketing, and investor conversations',
        ],
      },
      {
        name: 'Investor Pitch Videos',
        tagline: 'Present your vision with the authority it deserves',
        description:
          'Investor attention is the scarcest resource in business. We produce pitch videos that communicate your business potential with clarity, confidence, and cinematic quality \u2014 giving you a strategic advantage in every conversation where funding is on the table.',
        outcomes: [
          'A polished, professional pitch that stands apart from slide decks',
          'Compelling narrative that communicates vision and market opportunity',
          'An asset you can send ahead, share in meetings, or publish strategically',
        ],
      },
      {
        name: 'Documentary Production',
        tagline: 'The deepest form of authority-building storytelling',
        description:
          "Documentaries don't just tell your story \u2014 they make you the definitive voice in your field. We produce in-depth documentary films that explore your expertise, impact, and vision with the depth and craft that positions you as the undeniable authority your market needs.",
        outcomes: [
          'Long-form authority that no competitor can replicate',
          "Festival-quality production that reflects your brand's caliber",
          'A legacy piece that compounds in value over time',
        ],
      },
      {
        name: 'Video Commercials',
        tagline: 'High-production storytelling that demands attention',
        description:
          "A great commercial doesn't just promote \u2014 it positions. We produce broadcast and digital-quality commercials built on strategic narrative and production craft that make your brand unforgettable, whether viewed on a TV screen or a phone.",
        outcomes: [
          'Broadcast-quality production that elevates brand perception',
          'Strategic messaging that drives specific business objectives',
          'Campaign-ready assets optimized for TV and digital platforms',
        ],
      },
      {
        name: 'One-Time Event Videos',
        tagline: 'Capture the moments that matter most',
        description:
          'Some events only happen once \u2014 a grand opening, an anniversary, a milestone celebration. We ensure these defining moments are captured with the production quality and narrative craft they deserve, creating a permanent record that reinforces your brand story for years to come.',
        outcomes: [
          'Professional documentation of your milestone moments',
          'Highlight content for marketing, social, and internal use',
          "A lasting asset that tells the story of your brand's journey",
        ],
      },
    ],
  },
];

const ServicesPage: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<Record<number, number | null>>({
    0: null,
    1: null,
    2: null,
  });

  useEffect(() => {
    document.title = 'Services | R Flow Productions';
    return () => {
      document.title = 'R Flow Productions';
    };
  }, []);

  const toggleService = (catIdx: number, svcIdx: number) => {
    setOpenIndices((prev) => ({
      ...prev,
      [catIdx]: prev[catIdx] === svcIdx ? null : svcIdx,
    }));
  };

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
            Strategic Video Solutions for Every Stage of Growth
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Whether you need a steady stream of content that converts, an ongoing creative
            partnership, or a foundational brand asset that defines your market position —
            we build video strategies that turn expertise into authority.
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
              <p className="text-dark-300 max-w-2xl mx-auto">{category.summary}</p>
              <div className="w-20 h-1 bg-brand-red mx-auto mt-6"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl p-6 md:p-8 border border-surface-border shadow-medium max-w-3xl mx-auto"
            >
              {category.services.map((service, svcIdx) => (
                <ServiceAccordionItem
                  key={service.name}
                  service={service}
                  isOpen={openIndices[catIdx] === svcIdx}
                  toggleOpen={() => toggleService(catIdx, svcIdx)}
                />
              ))}
            </motion.div>
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
              Ready to Build Your Authority?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Every day without a strategic video presence is a day your competitors are
              building the authority that should be yours. Let's change that.
            </p>
            <Button
              onClick={() =>
                window.open('https://calendly.com/sjackson2409/15min', '_blank', 'noopener,noreferrer')
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
