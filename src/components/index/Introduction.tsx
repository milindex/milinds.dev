import Link from 'next/link';

import ResumeCTA from '@/components/header/resumeCTA';

import AccentImage from '../support/AccentImage';

function Introduction() {
  return (
    <section className="py-[30px] lg:py-[80px]">
      <div className="gap-8 lg:grid lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <h1 className="text-center font-bold text-primary-main lg:text-left lg:text-xl">
            Hi, my name is
          </h1>
          <h2 className="text-center text-3xl font-bold text-light-heading-primary dark:text-dark-heading-primary lg:text-left lg:text-6xl">
            Milind Sonawane.
          </h2>
          <h3 className="text-center text-2xl font-bold text-light-heading-secondary dark:text-dark-heading-secondary lg:text-left lg:text-5xl">
            I make Websites & Softwares
          </h3>
          <p className="mb-8 text-center lg:max-w-2xl lg:text-left">
            With a track record of delivering exceptional results, I specialize
            in building complex digital experiences that are both functional and
            visually appealing. Whether it&apos;s designing a user-friendly
            interface or implementing advanced features, I am committed to
            exceeding your expectations and bringing your vision to life.
          </p>
          <div className="my-8 flex items-center justify-center gap-8 lg:mb-0 lg:justify-start">
            <Link
              href="/contact"
              className="group relative inline-block bg-primary-main text-sm font-medium outline-none active:bg-primary-hover"
            >
              <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-primary-main transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
              <span className="relative block border border-current bg-lightbg px-8 py-3 dark:bg-darkbg">
                Let&apos;s Work Together
              </span>
            </Link>
            <ResumeCTA />
          </div>
        </div>
        <div className="lg:col-span-5">
          <AccentImage
            src="/assets/images/hero-banner.jpg"
            alt="Milind Sonawane, a full-stack developer"
            height={368}
            width={490}
            title="No, this is not a filter, I just happen to look like this person"
          />
        </div>
      </div>
    </section>
  );
}

export default Introduction;
