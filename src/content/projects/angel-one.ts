export interface EngineeringDecision {
  title: string;
  problem: string;
  decision: string;
  why: string[];
  tradeoffs: string[];
  outcome: string;
}

export interface TimelineEntry {
  period: string;
  title: string;
  items: string[];
}

export interface TechCategory {
  category: string;
  items: string[];
}

export interface ResultItem {
  area: string;
  outcomes: string[];
  businessValue?: string;
}

export const angelOneData = {
  slug: 'angel-one',
  name: 'Angel One',
  subtitle: 'Scaling One of India\'s Largest FinTech Platforms',
  role: 'Full Stack Developer',
  duration: 'July 2018 \u2013 June 2024',
  industry: 'FinTech',
  team: 'Cross-functional (Engineering, Design, Product, SEO, Marketing)',
  heroSummary: 'For over six years, I worked on Angel One\'s public web platform, helping scale one of India\'s largest fintech brands through performance engineering, enterprise WordPress development, SEO optimization, marketing automation, and reusable frontend architecture. My work focused on building fast, scalable, maintainable systems that supported millions of users while enabling marketing and product teams to launch campaigns rapidly.',
  shortDescription: 'Built and optimized Angel One\'s public web platform, improving performance, implementing enterprise search, automating AMP generation, and developing scalable WordPress architecture used across hundreds of landing pages.',
  
  about: 'Angel One is one of India\'s leading fintech companies providing stock trading, mutual funds, IPO investments, wealth management, portfolio tracking, financial education, and investment research. The website plays a critical role in customer acquisition, product education, search visibility, and marketing campaigns.',
  
  challenges: [
    {
      title: 'Scale',
      description: 'The platform consisted of thousands of pages spread across multiple business domains including product pages, blogs, research, Knowledge Center, company pages, IPO pages, Mutual Funds, and campaign landing pages.',
    },
    {
      title: 'Performance',
      description: 'Every millisecond mattered. Slow pages impacted user experience, search rankings, marketing campaigns, and customer acquisition.',
    },
    {
      title: 'SEO',
      description: 'The platform relied heavily on organic traffic. Every new page required metadata, structured content, fast rendering, mobile optimization, and crawlability.',
    },
    {
      title: 'Marketing Velocity',
      description: 'Marketing teams frequently launched campaigns that required new landing pages within short timelines. Engineering needed reusable systems rather than one-off implementations.',
    },
  ],

  responsibilities: [
    {
      area: 'Frontend Engineering',
      items: ['Customer-facing interfaces', 'Responsive layouts', 'UI components', 'Landing pages', 'Product pages'],
    },
    {
      area: 'WordPress Development',
      items: ['Custom themes', 'Gutenberg blocks', 'Reusable templates', 'CMS improvements', 'Content architecture'],
    },
    {
      area: 'Performance Engineering',
      items: ['Core Web Vitals improvements', 'JavaScript optimization', 'Asset optimization', 'Rendering improvements', 'AMP implementation'],
    },
    {
      area: 'Enterprise Search',
      items: ['Implemented and enhanced search using Elasticsearch and ElasticPress to improve discoverability across a large content ecosystem.'],
    },
    {
      area: 'Technical SEO',
      items: ['Worked alongside SEO stakeholders to improve crawlability, metadata consistency, AMP validation, and search performance.'],
    },
    {
      area: 'API Integration',
      items: ['Integrated backend services for company information, market data, historical prices, financial tools, and dynamic content.'],
    },
  ],

  engineeringHighlights: [
    {
      title: 'Reusable Component Architecture',
      items: ['Faster development', 'Better consistency', 'Easier maintenance', 'Reduced duplication'],
      description: 'Instead of building individual landing pages from scratch, I focused on reusable templates and modular components.',
    },
    {
      title: 'Enterprise Search',
      items: ['Elasticsearch integration', 'ElasticPress', 'Search UI improvements', 'Search optimization', 'Better navigation'],
      description: 'Search became a first-class product capability.',
    },
    {
      title: 'Performance Optimization',
      items: ['JavaScript optimization', 'CSS delivery', 'Asset optimization', 'Rendering improvements', 'Lazy loading', 'Core Web Vitals'],
      description: 'Recurring optimization efforts focused on making the platform faster.',
    },
    {
      title: 'AMP Ecosystem',
      items: ['AMP templates', 'AMP validation', 'AMP SEO', 'Mobile performance', 'Automated publishing'],
      description: 'A significant portion of engineering work involved AMP development for mobile performance.',
    },
  ],

  engineeringDecisions: [
    {
      title: 'Enterprise Search Instead of Default CMS Search',
      problem: 'The platform contained thousands of articles, company pages, research reports and financial products. Traditional WordPress search was not sufficient.',
      decision: 'Adopt Elasticsearch with ElasticPress to power enterprise search.',
      why: ['Faster queries', 'Better relevance', 'Scalability', 'Advanced indexing', 'Improved search experience'],
      tradeoffs: ['Additional infrastructure complexity', 'Index synchronization', 'Operational maintenance'],
      outcome: 'Search became a dedicated platform capability rather than a simple CMS feature.',
    },
    {
      title: 'Invest In AMP',
      problem: 'A significant percentage of visitors arrived through Google Search on mobile devices.',
      decision: 'Develop and continuously maintain AMP pages.',
      why: ['Faster mobile loading', 'Better SEO', 'Improved discoverability', 'Better user experience'],
      tradeoffs: ['Separate templates', 'Validation complexity', 'Restricted JavaScript'],
      outcome: 'Improved mobile performance while supporting search acquisition.',
    },
    {
      title: 'API-Driven Financial Data',
      problem: 'Market information changes continuously. Static content would become outdated almost immediately.',
      decision: 'Render financial information through APIs.',
      why: ['Accurate information', 'Easier updates', 'Centralized business logic', 'Better scalability'],
      tradeoffs: ['API dependency', 'Error handling', 'Network latency'],
      outcome: 'Consistent financial information across multiple pages.',
    },
    {
      title: 'Template Standardization',
      problem: 'Creating unique templates for every page type increases maintenance cost.',
      decision: 'Build reusable template architecture.',
      why: ['Faster development', 'Consistent UX', 'Easier maintenance', 'Better scalability'],
      tradeoffs: ['More planning upfront', 'Greater abstraction'],
      outcome: 'Enabled rapid campaign launches while maintaining consistency.',
    },
  ],

  results: [
    {
      area: 'Enterprise Platform Development',
      outcomes: ['Continuous feature delivery across 6+ years', 'Support for multiple business domains', 'Production-ready implementations'],
    },
    {
      area: 'Enterprise Search',
      outcomes: ['Better content discovery', 'Improved search experience', 'Scalable search architecture'],
      businessValue: 'Allowed users to locate financial information more efficiently across a large content ecosystem.',
    },
    {
      area: 'Performance Engineering',
      outcomes: ['Faster page rendering', 'Better mobile experience', 'Cleaner frontend architecture'],
      businessValue: 'Improved overall user experience and supported long-term platform performance.',
    },
    {
      area: 'SEO Improvements',
      outcomes: ['Improved technical SEO', 'Better indexing', 'Search-friendly architecture'],
      businessValue: 'Supported organic acquisition and discoverability.',
    },
    {
      area: 'CMS Evolution',
      outcomes: ['Faster development', 'Easier maintenance', 'Improved consistency'],
    },
    {
      area: 'Production Stability',
      outcomes: ['Stable releases', 'Reduced production issues', 'Continuous platform availability'],
    },
  ],

  techStack: [
    { category: 'Frontend', items: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'jQuery'] },
    { category: 'Backend', items: ['PHP', 'WordPress'] },
    { category: 'Search', items: ['Elasticsearch', 'ElasticPress'] },
    { category: 'APIs', items: ['REST APIs'] },
    { category: 'Performance', items: ['AMP', 'Core Web Vitals', 'Lazy Loading', 'Image Optimization'] },
    { category: 'Tooling', items: ['Git', 'CI/CD', 'Webpack', 'Gulp'] },
  ],

  lessons: [
    'Build systems, not pages. Reusable architecture compounds over time.',
    'Optimize for maintainability. Small improvements compound over years.',
    'Performance is a product feature, not an afterthought.',
    'Search deserves dedicated engineering investment.',
    'Cross-functional collaboration produces better engineering outcomes.',
    'Technical decisions should always support business objectives.',
    'Engineering quality directly impacts customer experience.',
  ],

  resumeBullets: [
    'Developed scalable WordPress solutions for one of India\'s largest fintech companies.',
    'Improved Core Web Vitals through frontend performance optimization.',
    'Implemented Elasticsearch to enhance enterprise website search.',
    'Built reusable component architecture for rapid campaign development.',
    'Automated AMP page generation for improved mobile performance.',
    'Collaborated with product, SEO, marketing, and design teams.',
  ],

  tags: ['FinTech', 'WordPress', 'Performance', 'SEO', 'Elasticsearch', 'AMP', 'JavaScript', 'PHP', 'Enterprise CMS', 'Component Architecture', 'Core Web Vitals', 'Full Stack'],
  
  featuredQuote: 'Large-scale engineering isn\'t just about writing code\u2014it\'s about creating systems that enable teams to move faster while delivering better experiences for millions of users.',
};

export default angelOneData;
