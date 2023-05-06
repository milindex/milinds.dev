const projects = [
  {
    id: 1,
    slug: 'angelone',
    name: 'AngelOne Website Development',
    client: 'AngelOne (formerly known as Angel Broking)',
    duration: 'July 2018 - Present',
    website: 'https://www.angelone.in/',
    description:
      'Developed custom WordPress theme using modern workflow, integrated Gravity Forms lead management with 3rd party LMS, utilized Amazon Polly for text-to-speech, created frameworks for converting custom posts into AMP pages, implemented Elasticsearch, optimized for 90+ Google PageSpeed score, monitored and fixed issues with Google Search Console, and utilized Google APP Script to report PageSpeed score via Sheets, while finding better technical solutions.',
    technologies: [
      'Gulp',
      'Webpack',
      'Gravity Forms',
      'Amazon Polly',
      'Elasticsearch',
    ],
    achievements: [
      'Developed a custom theme for the website using modern development workflow',
      'Integrated lead management system with 3rd party LMS',
      'Implemented Elasticsearch for the website and AMP pages',
      'Optimized website to achieve 90+ score on Google PageSpeed Insights',
    ],
  },
  {
    id: 2,
    slug: 'kapiva-checkout',
    name: 'Kapiva (Custom Checkout)',
    title: 'Custom Checkout and Payment Gateway Integration',
    client: 'Kapiva',
    duration: 'Jul 2021 - Jun 2022',
    website: 'https://kapiva.in/checkout-custom/',
    description:
      "Custom checkout implementation for Kapiva's BigCommerce store, including a custom payment gateway. Implemented using VueJS, Vuex, NodeRED and Google Sheets API.",
    technologies: [
      'VueJS',
      'Vuex',
      'BigCommerce API',
      'NodeRED',
      'Google Sheets API',
    ],
    achievements: [
      'Successfully integrated the custom payment gateway with the BigCommerce store.',
      'Successfully automated the checkout summary process using NodeRED.',
      'Implemented a smooth and user-friendly checkout process.',
      'Provided post-deployment support and maintenance for the project.',
    ],
  },
  {
    id: 3,
    slug: 'atomberg',
    name: 'Atomberg 2.0',
    title: 'Website Revamp and Lead Management System',
    client: 'Atomberg Technologies',
    duration: 'Feb 2020 - May 2022',
    website: 'https://atomberg.com/',
    description:
      "For Atomberg, we revamped the website with a custom WordPress theme and created a lead management system using Gravity Forms. We also developed VueJS modules and integrated 3rd party logistics services, optimized the website's performance, and created a system for Critical CSS to maintain care web vitals from Google.",
    technologies: [
      'WordPress',
      'PHP',
      'Gravity Forms',
      'VueJS',
      'Third-Party APIs',
      'Critical CSS',
    ],
    achievements: [
      'Designed and developed a modern, mobile-responsive website for Atomberg.',
      "Integrated a custom lead management system that helped streamline Atomberg's sales funnel.",
      "Implemented various VueJS modules to enhance the website's functionality.",
      'Integrated 3rd party APIs for logistics, providing a seamless user experience.',
      'Created and integrated a Critical CSS system to maintain website performance.',
      'Provided post-deployment support and maintenance for the project.',
    ],
  },
  {
    id: 4,
    slug: 'kapiva-blog',
    name: 'Kapiva (Blog Website)',
    title: 'Blog Website Development',
    client: 'Kapiva',
    duration: 'Jul 2021 - Jun 2022',
    website: 'https://blog.kapiva.in/',
    description:
      "Development of a WordPress website for Kapiva's blog, showcasing their products and industry knowledge.",
    technologies: ['WordPress', 'PHP', 'MySQL'],
    achievements: [
      'Designed and developed a custom WordPress theme for the blog.',
      'Integrated various WordPress plugins to enhance the functionality of the blog.',
      'Provided post-deployment support and maintenance for the project.',
    ],
  },
  {
    id: 5,
    slug: 'kapiva',
    name: 'Kapiva Website Development',
    title: 'WooCommerce Store Customizations and Integrations',
    client: 'Kapiva',
    duration: 'May 2019 - Jul 2021',
    website: 'https://old.kapiva.in/',
    description:
      "Various customizations and integrations for Kapiva's WooCommerce store.",
    technologies: ['WooCommerce', 'Razorpay', 'Facebook Pixel'],
    achievements: [
      'Successfully integrated a logistic courier service with the WooCommerce store.',
      'Implemented multiple structured data/schema for SEO purposes.',
      'Fulfilled multiple unique custom requirements in the WooCommerce store.',
      'Custom integration of Razorpay service for payments.',
      'Configured a custom checkout plugin and integrated it with multiple 3rd party services for monitoring the customer journey.',
      'Continuously optimized the website for maximum availability.',
      'Optimized resources at the server level.',
      'Integrated Facebook Pixel with the WooCommerce store.',
    ],
  },
  {
    id: 6,
    slug: 'furnitureroots',
    name: 'FurnitureRoots',
    title: 'E-commerce website for commercial & hospitality furniture',
    client: 'FurnitureRoots',
    duration: 'Dec 2018 - Dec 2019',
    website: 'https://furnitureroots.com/',
    description:
      'Developed an e-commerce website for FurnitureRoots, featuring personalized commercial and hospitality furniture.',
    technologies: ['Wordpress', 'PHP', 'MySQL'],
    achievements: [
      'Designed and developed a fully-functional e-commerce website with a user-friendly interface.',
      'Integrated various Wordpress extensions to enhance the functionality of the website.',
      'Provided post-deployment support and maintenance for the project.',
    ],
  },
];

export default projects;
