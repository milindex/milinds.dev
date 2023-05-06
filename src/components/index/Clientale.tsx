import Link from 'next/link';

import ClientsSlider from './modules/ClientsSlider';

function Clientale() {
  return (
    <section className="py-[20px] lg:py-[80px]">
      <h2 className="mb-8 text-center text-2xl font-bold">
        At the Forefront: Serving India’s Leading Companies
      </h2>

      <ClientsSlider />

      <p className="mx-auto mb-8 text-center text-light-heading-secondary lg:max-w-2xl">
        Through my work on various projects, I have acquired expertise in an
        array of technologies and frameworks, including VueJS, AMP (Accelerated
        Mobile Pages), Cloudflare, and others such as React, Node.js, and AWS.
      </p>

      <div className="flex items-center justify-center text-center">
        <Link
          href="/projects"
          className="group relative inline-block bg-primary-main text-sm font-medium focus:outline-none focus:ring active:bg-primary-hover"
        >
          <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-primary-main transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span className="relative block border border-current bg-darkbg px-8 py-3">
            Checkout all Projects
          </span>
        </Link>
      </div>
    </section>
  );
}

export default Clientale;
