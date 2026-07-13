import { MessageSquare, Globe, Bot, UserCheck, Search, Send, MapPin, Share2, Database, PhoneCall, LucideIcon } from 'lucide-react';

export interface ServiceDetail {
  slug: string;
  icon: LucideIcon;
  title: string;
  price: string;
  tag: string;
  description: string;
  longDescription: string;
  bg: string;
  border: string;
  iconBg: string;
  iconColor: string;
  tagBg: string;
  checkColor: string;
  ctaColor: string;
  theme: string;
  features: string[];
  detailedFeatures: { title: string; desc: string }[];
  benefits: string[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: 'whatsapp-automation',
    icon: MessageSquare,
    title: 'WhatsApp Automation',
    price: '₹4,999',
    tag: 'Most Popular',
    description: 'Turn WhatsApp into your 24/7 sales team. Instantly respond to every inquiry, capture leads, book appointments, and send broadcast promotions — all automated. Never miss a customer again.',
    longDescription: 'WhatsApp Automation is the ultimate tool for businesses looking to scale their customer interactions without adding headcount. Our solution connects directly to your WhatsApp Business API, setting up intelligent auto-replies, dynamic booking flows, and broadcast campaigns that achieve 90%+ open rates. Transform casual inquiries into qualified leads while you sleep.',
    bg: 'bg-gradient-to-br from-[#003d1a] to-[#001a0d]',
    border: 'border-emerald-500/30',
    iconBg: 'bg-emerald-500/15 border-emerald-500/30',
    iconColor: 'text-emerald-400',
    tagBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    checkColor: 'text-emerald-400',
    ctaColor: 'text-emerald-400',
    theme: 'emerald',
    features: ['Auto Replies & FAQ Bot', 'Lead Collection System', 'Appointment Booking Flow', 'Broadcast Campaigns', 'Automated Follow-Ups'],
    detailedFeatures: [
      { title: 'Auto Replies & FAQ Bot', desc: 'Instantly answer common customer questions, reducing response times to zero.' },
      { title: 'Lead Collection System', desc: 'Automatically gather customer details like names and emails directly within the chat.' },
      { title: 'Appointment Booking Flow', desc: 'Allow users to select available slots and book appointments seamlessly via WhatsApp.' },
      { title: 'Broadcast Campaigns', desc: 'Send bulk promotional messages to thousands of opted-in customers with a single click.' },
      { title: 'Automated Follow-Ups', desc: 'Re-engage cold leads with automated, personalized follow-up sequences.' }
    ],
    benefits: [
      'Increases lead conversion rates by responding within seconds.',
      'Saves hours of manual customer support time every week.',
      'Drives repeat sales with highly visible broadcast promotions.',
      'Provides a smooth, friction-free booking experience for your clients.'
    ]
  },
  {
    slug: 'premium-website',
    icon: Globe,
    title: 'Premium Website',
    price: '₹9,999',
    tag: 'Foundation',
    description: 'Your digital storefront — built to convert visitors into paying customers. Fast-loading, mobile-first, SEO-ready websites that look world-class and generate real inquiries for your business.',
    longDescription: 'In today\'s digital landscape, your website is your most important asset. We build blazing-fast, visually stunning websites engineered specifically for conversion. By combining modern UI/UX principles, technical SEO, and seamless mobile responsiveness, we ensure that every visitor gets a world-class impression of your brand — and is gently pushed toward contacting you or making a purchase.',
    bg: 'bg-gradient-to-br from-[#001a3d] to-[#000d1a]',
    border: 'border-blue-500/30',
    iconBg: 'bg-blue-500/15 border-blue-500/30',
    iconColor: 'text-blue-400',
    tagBg: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
    checkColor: 'text-blue-400',
    ctaColor: 'text-blue-400',
    theme: 'blue',
    features: ['Fully Mobile Responsive', 'Ultra-Fast Loading (<2s)', 'SEO Architecture Ready', 'Lead Capture Forms', 'Modern UI/UX Design'],
    detailedFeatures: [
      { title: 'Fully Mobile Responsive', desc: 'Looks and functions perfectly on all devices, from smartphones to large desktop monitors.' },
      { title: 'Ultra-Fast Loading (<2s)', desc: 'Optimized code and assets ensure your site loads instantly, preventing visitor bounce.' },
      { title: 'SEO Architecture Ready', desc: 'Built with search engines in mind, featuring clean code, meta tags, and semantic structure.' },
      { title: 'Lead Capture Forms', desc: 'Strategically placed forms to maximize visitor inquiries and lead generation.' },
      { title: 'Modern UI/UX Design', desc: 'Sleek, professional aesthetics that build trust and elevate your brand perception.' }
    ],
    benefits: [
      'Establishes instant credibility and trust with your target audience.',
      'Acts as a 24/7 sales representative that never sleeps.',
      'Provides a strong foundation for all your digital marketing efforts.',
      'Captures more leads with scientifically proven layout structures.'
    ]
  },
  {
    slug: 'ai-chatbots',
    icon: Bot,
    title: 'AI Chatbots',
    price: '₹7,999',
    tag: 'Always On',
    description: 'An intelligent AI assistant that answers questions, qualifies leads, and guides customers to purchase — 24/7 across your website, WhatsApp, Instagram and Facebook simultaneously.',
    longDescription: 'Our AI Chatbots are trained specifically on your business data. They can understand natural language, interpret user intent, and provide accurate, helpful responses just like your best employee. Whether a customer messages you at 2 PM or 2 AM, the AI instantly qualifies them, answers their queries, and pushes hot leads directly to your sales team across multiple platforms.',
    bg: 'bg-gradient-to-br from-[#16003d] to-[#0a001a]',
    border: 'border-indigo-500/30',
    iconBg: 'bg-indigo-500/15 border-indigo-500/30',
    iconColor: 'text-indigo-400',
    tagBg: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
    checkColor: 'text-indigo-400',
    ctaColor: 'text-indigo-400',
    theme: 'indigo',
    features: ['Website Chat Widget', 'WhatsApp Integration', 'Instagram & Facebook', 'Lead Qualification', '24/7 Always On'],
    detailedFeatures: [
      { title: 'Website Chat Widget', desc: 'A sleek, unobtrusive chat bubble on your site ready to assist visitors instantly.' },
      { title: 'Omnichannel Integration', desc: 'Works seamlessly across WhatsApp, Instagram DMs, and Facebook Messenger.' },
      { title: 'Contextual Understanding', desc: 'Understands spelling mistakes and natural language to provide human-like responses.' },
      { title: 'Lead Qualification', desc: 'Asks the right questions to separate casual browsers from serious buyers.' },
      { title: '24/7 Always On', desc: 'Never misses a midnight inquiry; your business is always open.' }
    ],
    benefits: [
      'Drastically reduces support ticket volume and manual workload.',
      'Ensures no lead is lost due to delayed response times.',
      'Provides a consistent, high-quality brand voice across all channels.',
      'Scales infinitely during high-traffic periods without extra cost.'
    ]
  },
  {
    slug: 'ai-business-agents',
    icon: UserCheck,
    title: 'AI Business Agents',
    price: '₹14,999',
    tag: 'Enterprise',
    description: 'A fully autonomous AI employee that handles customer support, qualifies leads, books appointments and integrates with your CRM — freeing your team to focus only on closing deals.',
    longDescription: 'AI Business Agents take standard chatbots to the next level by acting as autonomous workers. They can log into systems, update CRM records, send emails, process basic transactions, and manage complex multi-step workflows. They don\'t just talk — they do the work. Imagine having an employee who works 24/7, never takes a day off, and handles 80% of your administrative and initial sales tasks flawlessly.',
    bg: 'bg-gradient-to-br from-[#1f003d] to-[#0d001a]',
    border: 'border-violet-500/30',
    iconBg: 'bg-violet-500/15 border-violet-500/30',
    iconColor: 'text-violet-400',
    tagBg: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
    checkColor: 'text-violet-400',
    ctaColor: 'text-violet-400',
    theme: 'violet',
    features: ['Customer Support Agent', 'Digital Sales Assistant', 'Lead Qualification', 'Booking Automation', 'CRM Integration'],
    detailedFeatures: [
      { title: 'Autonomous Task Execution', desc: 'Can trigger workflows like sending contracts, emails, or updating databases.' },
      { title: 'Digital Sales Assistant', desc: 'Guides users through your product catalog, recommends items, and handles objections.' },
      { title: 'Deep CRM Integration', desc: 'Automatically creates contacts, deals, and notes in your CRM (HubSpot, Salesforce, etc.).' },
      { title: 'Complex Booking Logic', desc: 'Checks multiple calendars and handles rescheduling without human intervention.' },
      { title: 'Multi-Agent Collaboration', desc: 'Different AI agents can hand off tasks to one another (e.g., Support agent hands off to Sales agent).' }
    ],
    benefits: [
      'Reduces overhead costs significantly compared to hiring human staff for repetitive tasks.',
      'Allows your human team to focus exclusively on high-value, complex problem-solving.',
      'Eliminates data entry errors and ensures perfect CRM hygiene.',
      'Accelerates the sales cycle with instant action and zero bottlenecks.'
    ]
  },
  {
    slug: 'google-seo',
    icon: Search,
    title: 'Google SEO',
    price: '₹8,999',
    tag: 'Long-Term Growth',
    description: 'Dominate Google search for your city and niche. We optimize your website, build authority backlinks, and get you appearing when potential customers are actively searching for your services.',
    longDescription: 'Search Engine Optimization (SEO) is the most sustainable way to acquire high-intent customers. When someone searches for a service in their city, they are ready to buy. We employ white-hat, data-driven SEO strategies including on-page optimization, technical fixes, content clustering, and high-authority backlink building to push your website to the top of Google page one, generating compounding organic traffic over time.',
    bg: 'bg-gradient-to-br from-[#2d1a00] to-[#1a0d00]',
    border: 'border-amber-500/30',
    iconBg: 'bg-amber-500/15 border-amber-500/30',
    iconColor: 'text-amber-400',
    tagBg: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    checkColor: 'text-amber-400',
    ctaColor: 'text-amber-400',
    theme: 'amber',
    features: ['Keyword Research', 'Local SEO & Reviews', 'Competitor Analysis', 'Content Optimization', 'Monthly Reports'],
    detailedFeatures: [
      { title: 'Comprehensive Keyword Strategy', desc: 'Identifying high-volume, low-competition keywords that your ideal customers are searching for.' },
      { title: 'Technical SEO Audits', desc: 'Fixing site speed, broken links, schema markup, and mobile usability issues.' },
      { title: 'Content Optimization', desc: 'Writing and optimizing blog posts and landing pages to answer user queries effectively.' },
      { title: 'Authority Link Building', desc: 'Acquiring high-quality backlinks from reputable websites to boost your domain authority.' },
      { title: 'Transparent Monthly Reporting', desc: 'Clear dashboards showing your ranking improvements, traffic growth, and ROI.' }
    ],
    benefits: [
      'Generates free, compounding traffic without having to pay for ads.',
      'Captures users at the exact moment they are looking to make a purchase.',
      'Builds long-term brand equity and industry authority.',
      'Outranks competitors to capture the lion\'s share of local market demand.'
    ]
  },
  {
    slug: 'lead-generation',
    icon: Send,
    title: 'Lead Generation',
    price: '₹12,999',
    tag: 'Revenue Boost',
    description: 'Stop waiting for customers — we actively go find them for you. Targeted outreach campaigns across LinkedIn, email, and WhatsApp that deliver pre-qualified, high-intent business leads.',
    longDescription: 'Inbound marketing takes time. When you need revenue now, you need active Lead Generation. We build targeted lists of your ideal buyers and execute multi-channel outbound campaigns using personalized Cold Email, LinkedIn outreach, and WhatsApp. We handle the prospecting, copywriting, and initial engagement, handing over only warm, interested prospects who are ready to speak with you.',
    bg: 'bg-gradient-to-br from-[#3d0015] to-[#1a0009]',
    border: 'border-pink-500/30',
    iconBg: 'bg-pink-500/15 border-pink-500/30',
    iconColor: 'text-pink-400',
    tagBg: 'bg-pink-500/15 text-pink-300 border-pink-500/30',
    checkColor: 'text-pink-400',
    ctaColor: 'text-pink-400',
    theme: 'pink',
    features: ['Prospect Research', 'LinkedIn Outreach', 'Cold Email Campaigns', 'WhatsApp Campaigns', 'Active Lead Tracking'],
    detailedFeatures: [
      { title: 'Targeted Prospect Research', desc: 'Scraping and verifying data to build a list of decision-makers in your target industry.' },
      { title: 'Hyper-Personalized Copywriting', desc: 'Crafting compelling outreach messages that resonate with the prospect\'s specific pain points.' },
      { title: 'Multi-Channel Sequencing', desc: 'Combining Email, LinkedIn, and calls in a strategic sequence to maximize reply rates.' },
      { title: 'Deliverability Management', desc: 'Technical setup of domains and inboxes to ensure your emails avoid the spam folder.' },
      { title: 'Meeting Booking', desc: 'We handle the back-and-forth scheduling to book appointments directly onto your calendar.' }
    ],
    benefits: [
      'Provides a predictable, scalable pipeline of new business opportunities.',
      'Allows you to target enterprise accounts and specific high-value clients.',
      'Takes the painful, time-consuming prospecting work off your plate.',
      'Delivers immediate ROI compared to long-term strategies like SEO.'
    ]
  },
  {
    slug: 'google-business-profile',
    icon: MapPin,
    title: 'Google Business Profile',
    price: '₹4,999',
    tag: 'Local Visibility',
    description: 'Get discovered by local customers searching "near me." We fully optimize your Google Business Profile to appear in Maps, improve your star ratings, and drive walk-in & call inquiries.',
    longDescription: 'For local businesses, your Google Business Profile (formerly GMB) is often more important than your website. We optimize your profile completely — updating categories, writing SEO-rich descriptions, uploading optimized photos, and implementing a review generation strategy. We help you rank in the coveted "Local 3-Pack," ensuring you are the first business people see when they search on Google Maps.',
    bg: 'bg-gradient-to-br from-[#002d3d] to-[#001a24]',
    border: 'border-cyan-500/30',
    iconBg: 'bg-cyan-500/15 border-cyan-500/30',
    iconColor: 'text-cyan-400',
    tagBg: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
    checkColor: 'text-cyan-400',
    ctaColor: 'text-cyan-400',
    theme: 'cyan',
    features: ['Google Maps Top Ranking', 'Review Strategy', 'Profile Optimization', 'Local Visibility Boost'],
    detailedFeatures: [
      { title: 'Profile Completeness Check', desc: 'Ensuring every single field is filled out accurately to Google\'s standards.' },
      { title: 'Review Automation Strategy', desc: 'Implementing systems (like QR codes or automated SMS) to get more 5-star reviews from happy customers.' },
      { title: 'Local Citations', desc: 'Ensuring your Name, Address, and Phone number (NAP) are consistent across the web to build local authority.' },
      { title: 'Weekly Update Posts', desc: 'Publishing offers, events, and updates to keep your profile active and engaging.' },
      { title: 'Spam Fighting', desc: 'Reporting fake competitor listings to clear the way for your legitimate business.' }
    ],
    benefits: [
      'Drives immediate foot traffic and phone calls from local customers.',
      'Builds massive social proof through a high volume of positive reviews.',
      'Requires zero ad spend to generate consistent local leads.',
      'Provides clear analytics on how customers are finding and interacting with you.'
    ]
  },
  {
    slug: 'social-media-automation',
    icon: Share2,
    title: 'Social Media Automation',
    price: '₹6,999',
    tag: 'Brand Building',
    description: 'Consistent, AI-generated content across Instagram, Facebook, LinkedIn and more — scheduled automatically. We build your brand presence so you can focus on running your business.',
    longDescription: 'Maintaining an active social media presence is crucial, but it\'s exhausting. Our Social Media Automation service leverages AI to generate on-brand captions, design graphics, and schedule posts weeks in advance across all your platforms. We ensure your brand stays top-of-mind for your followers with consistent, high-quality output, while you spend zero time worrying about what to post today.',
    bg: 'bg-gradient-to-br from-[#003d30] to-[#001a15]',
    border: 'border-teal-500/30',
    iconBg: 'bg-teal-500/15 border-teal-500/30',
    iconColor: 'text-teal-400',
    tagBg: 'bg-teal-500/15 text-teal-300 border-teal-500/30',
    checkColor: 'text-teal-400',
    ctaColor: 'text-teal-400',
    theme: 'teal',
    features: ['AI Content Creation', 'Multi-Channel Scheduling', 'Hashtag Research', 'Auto-Engagement', 'Analytics Dashboard'],
    detailedFeatures: [
      { title: 'AI-Powered Content Generation', desc: 'Creating engaging text, polls, and image concepts tailored to your brand voice.' },
      { title: 'Omnichannel Publishing', desc: 'Simultaneously posting to Instagram, Facebook, LinkedIn, X, and Pinterest.' },
      { title: 'Smart Scheduling', desc: 'Analyzing your audience data to post exactly when they are most active.' },
      { title: 'Automated Engagement', desc: 'Auto-liking and replying to basic comments to boost algorithmic reach.' },
      { title: 'Performance Analytics', desc: 'Tracking follower growth, engagement rates, and click-throughs to optimize future posts.' }
    ],
    benefits: [
      'Keeps your brand relevant and top-of-mind without daily effort.',
      'Ensures a professional, cohesive brand aesthetic across the internet.',
      'Saves hours of brainstorming, writing, and manual posting every week.',
      'Gradually builds a loyal community of followers and advocates.'
    ]
  },
  {
    slug: 'crm-setup-automation',
    icon: Database,
    title: 'CRM Setup & Automation',
    price: '₹9,999',
    tag: 'Sales System',
    description: 'Organize all your leads, track every deal, and automate follow-ups in a powerful CRM. Know exactly which leads are hot, which need follow-up, and never let a sale fall through the cracks.',
    longDescription: 'A Customer Relationship Management (CRM) system is the brain of your sales operations. We configure industry-leading CRMs (like HubSpot, Zoho, or GoHighLevel) customized entirely to your sales process. We build automated pipelines that move deals forward, trigger SMS/email follow-ups when leads go cold, and assign tasks to your team automatically. Stop relying on spreadsheets and memory to run your business.',
    bg: 'bg-gradient-to-br from-[#2d1400] to-[#1a0a00]',
    border: 'border-orange-500/30',
    iconBg: 'bg-orange-500/15 border-orange-500/30',
    iconColor: 'text-orange-400',
    tagBg: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
    checkColor: 'text-orange-400',
    ctaColor: 'text-orange-400',
    theme: 'orange',
    features: ['HubSpot / Zoho / GHL', 'Pipeline Management', 'Lead Tracking', 'Workflow Automations', 'Notification Alerts'],
    detailedFeatures: [
      { title: 'Custom Pipeline Creation', desc: 'Mapping your exact sales process into visual drag-and-drop stages.' },
      { title: 'Data Migration & Cleanup', desc: 'Safely importing your existing contacts from spreadsheets or old systems.' },
      { title: 'Automated Follow-Up Sequences', desc: 'Triggering emails and texts automatically if a lead stays in a stage for too long.' },
      { title: 'Internal Team Notifications', desc: 'Pinging your sales reps on Slack or email when a hot lead takes action.' },
      { title: 'Sales Reporting Dashboards', desc: 'Visualizing revenue forecasts, win rates, and team performance metrics.' }
    ],
    benefits: [
      'Prevents expensive leads from slipping through the cracks due to poor follow-up.',
      'Gives you complete visibility into the health and metrics of your sales pipeline.',
      'Standardizes your sales process so new reps can be onboarded quickly.',
      'Saves time by automating data entry and repetitive communication.'
    ]
  },
  {
    slug: 'ai-voice-calling-agents',
    icon: PhoneCall,
    title: 'AI Voice Calling Agents',
    price: '₹19,999',
    tag: 'Advanced AI',
    description: 'An AI that actually calls your leads, qualifies them in natural conversation, books appointments and instantly routes hot prospects to your sales team. Outbound calling at scale — 24/7.',
    longDescription: 'Experience the cutting edge of sales technology. Our AI Voice Agents can make hundreds of outbound calls per minute, speaking with a natural, conversational voice. They handle objections, answer questions about your services, and qualify prospects based on your specific criteria. If a prospect is interested, the AI can book them into your calendar or instantly patch the call through to a live human closer.',
    bg: 'bg-gradient-to-br from-[#3d0010] to-[#1a0008]',
    border: 'border-rose-500/30',
    iconBg: 'bg-rose-500/15 border-rose-500/30',
    iconColor: 'text-rose-400',
    tagBg: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
    checkColor: 'text-rose-400',
    ctaColor: 'text-rose-400',
    theme: 'rose',
    features: ['Automated Outbound Calls', 'Lead Qualification Voice', 'Appointment Reminders', 'Multilingual Support', 'Instant Status Routing'],
    detailedFeatures: [
      { title: 'Conversational AI Voice', desc: 'Ultra-realistic voices with natural pauses, filler words (um, ah), and perfect inflection.' },
      { title: 'Dynamic Objection Handling', desc: 'Trained on your sales scripts to politely overcome common objections on the fly.' },
      { title: 'Live Call Transfers', desc: 'Seamlessly transferring the call to a human rep when the prospect is ready to buy.' },
      { title: 'Automated Post-Call Actions', desc: 'Sending a follow-up text or email summarizing the call immediately after hanging up.' },
      { title: 'Mass Scale Outreach', desc: 'Ability to call lists of 10,000+ leads in a matter of hours, not months.' }
    ],
    benefits: [
      'Eliminates the soul-crushing work of cold calling for your human team.',
      'Achieves massive outreach scale without hiring a massive call center.',
      'Ensures every single lead is called within 5 minutes of form submission, 24/7.',
      'Provides full transcripts and recordings of every interaction for review.'
    ]
  }
];
