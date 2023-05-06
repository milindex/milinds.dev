import Link from 'next/link';

function Services() {
  return (
    <section className="py-[30px] lg:py-[80px]">
      <h2 className="mb-8 text-center text-2xl font-bold">
        Comprehensive Web Solutions: From Design to Performance
      </h2>
      {/* grid of 3 columns */}
      <div className="mb-8 grid rounded-lg border border-primary-main shadow-sm lg:mx-auto lg:mb-12 lg:w-3/4 lg:grid-cols-3">
        <div className="flex flex-col items-center justify-start rounded-t-lg border-b border-primary-main p-8 text-center lg:rounded-t-none lg:rounded-tl-lg lg:border-r">
          <blockquote className="mx-auto max-w-2xl text-light-heading-secondary">
            <h3 className="mb-4 text-lg font-semibold text-light-heading-primary dark:text-dark-heading-primary">
              Sleek and Responsive Static Websites
            </h3>
            <p className="text-center">
              We offer top-notch services in creating static websites that
              feature a clean and responsive user interface for seamless
              navigation.
            </p>
          </blockquote>
        </div>
        <div className="flex flex-col items-center justify-start rounded-t-lg border-b border-primary-main p-8 text-center lg:rounded-t-none lg:rounded-tl-lg lg:border-r">
          <blockquote className="mx-auto max-w-2xl text-light-heading-secondary">
            <h3 className="mb-4 text-lg font-semibold text-light-heading-primary dark:text-dark-heading-primary">
              Dynamic WordPress Websites
            </h3>
            <p className="text-center">
              We provide exceptional services in developing dynamic and
              interactive websites utilizing the WordPress platform to deliver
              engaging user experiences.
            </p>
          </blockquote>
        </div>
        <div className="flex flex-col items-center justify-start rounded-t-lg border-b border-primary-main p-8 text-center lg:rounded-t-none lg:rounded-tl-lg">
          <blockquote className="mx-auto max-w-2xl text-light-heading-secondary">
            <h3 className="mb-4 text-lg font-semibold text-light-heading-primary dark:text-dark-heading-primary">
              E-commerce Websites
            </h3>
            <p className="text-center">
              We offer expert design and implementation services for e-commerce
              websites using the WooCommerce platform to deliver a seamless
              online shopping experience.
            </p>
          </blockquote>
        </div>
        <div className="flex flex-col items-center justify-start rounded-t-lg border-b border-primary-main p-8 text-center lg:rounded-t-none lg:rounded-tl-lg lg:border-b-0 lg:border-r">
          <blockquote className="mx-auto max-w-2xl text-light-heading-secondary">
            <h3 className="mb-4 text-lg font-semibold text-light-heading-primary dark:text-dark-heading-primary">
              API and 3rd Party Integration
            </h3>
            <p className="text-center">
              We provide seamless integration of 3rd party services and creation
              of custom APIs for your data to enhance the functionality and
              efficiency of your website.
            </p>
          </blockquote>
        </div>
        <div className="flex flex-col items-center justify-start rounded-t-lg border-b border-primary-main p-8 text-center lg:rounded-t-none lg:rounded-tl-lg lg:border-b-0 lg:border-r">
          <blockquote className="mx-auto max-w-2xl text-light-heading-secondary">
            <h3 className="mb-4 text-lg font-semibold text-light-heading-primary dark:text-dark-heading-primary">
              Performance Optimization
            </h3>
            <p className="text-center">
              We offer expert services in optimizing website performance to
              enhance user experience and improve overall functionality.
            </p>
          </blockquote>
        </div>
        <div className="flex flex-col items-center justify-start rounded-t-lg border-primary-main p-8 text-center lg:rounded-t-none lg:rounded-tl-lg lg:border-b-0">
          <blockquote className="mx-auto max-w-2xl text-light-heading-secondary">
            <h3 className="mb-4 text-lg font-semibold text-light-heading-primary dark:text-dark-heading-primary">
              Server Management/Hosting
            </h3>
            <p className="text-center">
              We provide comprehensive server management services, including
              configuration, setup, and Cloudflare integration to ensure optimal
              website uptime and security.
            </p>
          </blockquote>
        </div>
      </div>

      <div className="flex items-center justify-center text-center">
        <Link
          href="/contact"
          className="group relative inline-block bg-primary-main text-sm font-medium outline-none active:bg-primary-hover"
        >
          <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-primary-main transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span className="relative block border border-current bg-lightbg px-8 py-3 dark:bg-darkbg">
            Enquire Now
          </span>
        </Link>
      </div>
    </section>
  );
}

export default Services;
