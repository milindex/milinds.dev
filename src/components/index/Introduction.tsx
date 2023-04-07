import Link from 'next/link';

import ResumeCTA from '@/components/header/resumeCTA';

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
            As a Full Stack Developer, I specialize in building complex digital
            experiences that are both functional and visually appealing. With
            expertise in both front-end and back-end development, I have the
            skills and knowledge to bring your vision to life. Whether it’s
            designing a user-friendly interface or implementing advanced
            features, I am dedicated to delivering exceptional results that
            exceed your expectations.
          </p>

          <div className="my-8 flex items-center justify-center gap-4 lg:mb-0 lg:justify-start">
            <Link
              href="/contact"
              className="flex select-none rounded-full bg-primary-main p-2 pr-3 text-og-text transition-all duration-500 hover:bg-primary-hover hover:text-og-text"
            >
              Get in Touch
            </Link>
            <ResumeCTA />
          </div>
        </div>
        <div className="lg:col-span-5">
          <img
            src="/assets/images/hero-banner.jpg"
            alt="I make Websites & Softwares"
            height={368}
            width={490}
            className="w-full rounded-2xl grayscale transition-all duration-500 ease-in-out hover:grayscale-0"
            title="No, this is not a filter, I just happen to look like this person"
          />
        </div>
      </div>
    </section>
  );
}

export default Introduction;
