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
          className="select-none rounded-full border border-primary-main p-2 px-5 text-primary-main transition-all duration-500 hover:border-transparent hover:bg-primary-hover hover:text-og-text"
        >
          Checkout all Projects
        </Link>
      </div>
    </section>
  );
}

export default Clientale;
