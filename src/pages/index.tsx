/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import '@splidejs/react-splide/css';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import Link from 'next/link';

import ResumeCTA from '@/components/header/resumeCTA';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const clients = [
    // {
    //   '5paisa': '5paisa is a leading discount stockbroker in India',
    // },
    {
      acko: {
        title:
          'Acko General Insurance is a private sector general insurance company in India',
        width: 82,
        height: 26,
      },
    },
    {
      angelone: {
        title: 'Angel One is an Indian stockbroker firm established in 1996',
        width: 208,
        height: 50,
      },
    },
    {
      atomberg: {
        title:
          "Atomberg is in the business of revolutionizing India's home appliances",
        width: 178,
        height: 50,
      },
    },
    {
      kapiva: {
        title:
          'Kapiva is a modern Ayurvedic nutrition brand that is dedicated to the ideas of sustenance and quality at its core',
        width: 155,
        height: 50,
      },
    },
  ];

  return (
    <Main
      meta={
        <Meta
          title="Milind Sonawane | Full Stack Developer"
          description="Milind Sonawane is a Full Stack Developer from India. He is a passionate developer who loves to code and learn new technologies."
        />
      }
    >
      <div>
        {/* I've worked with ... */}

        <section className="py-[30px] lg:py-[80px]">
          <div className="lg:grid lg:grid-cols-12 lg:items-center">
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
                As a Full Stack Developer, I specialize in building complex
                digital experiences that are both functional and visually
                appealing. With expertise in both front-end and back-end
                development, I have the skills and knowledge to bring your
                vision to life. Whether it’s designing a user-friendly interface
                or implementing advanced features, I am dedicated to delivering
                exceptional results that exceed your expectations.
              </p>

              <div className="my-4 flex items-center justify-center gap-4 lg:mb-0 lg:justify-start">
                <Link
                  href="/contact"
                  className="flex select-none rounded-full border border-primary-main bg-primary-hover p-2 pr-3 text-og-text transition-all duration-500 hover:border-transparent hover:bg-primary-main hover:text-og-text"
                >
                  Let&apos;s Talk?
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

        <section className="py-[20px] lg:py-[80px]">
          <h2 className="mb-8 text-center text-2xl font-bold">
            At the Forefront: Serving India’s Leading Companies
          </h2>

          {/* splide slider */}

          <Splide
            options={{
              destroy: true,
              breakpoints: {
                640: {
                  type: 'slide',
                  rewind: true,
                  rewindByDrag: true,
                  perPage: 1,
                  arrows: false,
                  autoplay: false,
                  pauseOnHover: false,
                  paginationDirection: 'ltr',
                  destroy: false,
                },
              },
            }}
            className="indian-clients-slider mt-4 mb-10 pb-10 lg:mt-8 lg:pb-0"
          >
            {clients.map((client, index) => (
              <SplideSlide key={index}>
                <img
                  src={`/assets/images/clients/${Object.keys(client)[0]}.png`}
                  alt={Object.values(client)[0]}
                  width={Object.values(client)[0].width}
                  height={Object.values(client)[0].height}
                  title={Object.values(client)[0].title}
                  className={`h-[50px] w-auto ${
                    Object.keys(client)[0]
                  } mx-auto select-none hover:scale-110 lg:grayscale lg:transition-all lg:duration-500 lg:ease-in-out lg:hover:grayscale-0`}
                />
              </SplideSlide>
            ))}
            <style jsx>{`
              .acko {
                height: unset;
                width: unset;
                display: flex;
                align-items: center;
              }
              .atomberg {
                background-color: #000;
              }
              .kapiva {
                background-color: #fff;
              }
            `}</style>
          </Splide>

          <p className="mx-auto mb-8 text-center text-light-heading-secondary lg:max-w-2xl">
            Through my work on various projects, I have acquired expertise in an
            array of technologies and frameworks, including VueJS, AMP
            (Accelerated Mobile Pages), Cloudflare, and others such as React,
            Node.js, and AWS.
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

        <section className="py-[30px] lg:py-[80px]">
          <h2 className="mb-8 text-center text-2xl font-bold">
            Comprehensive Web Solutions: From Design to Performance
          </h2>
          {/* grid of 3 columns */}
          <div className="mb-8 grid rounded-lg border border-primary-main shadow-sm md:mb-12 md:grid-cols-3 lg:mx-auto lg:w-3/4">
            <div className="flex flex-col items-center justify-start rounded-t-lg border-b border-primary-main p-8 text-center md:rounded-t-none md:rounded-tl-lg md:border-b-0 md:border-r">
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
            <div className="flex flex-col items-center justify-start rounded-t-lg border-b border-primary-main p-8 text-center md:rounded-t-none md:rounded-tl-lg md:border-b-0 md:border-r">
              <blockquote className="mx-auto max-w-2xl text-light-heading-secondary">
                <h3 className="mb-4 text-lg font-semibold text-light-heading-primary dark:text-dark-heading-primary">
                  Dynamic WordPress Websites
                </h3>
                <p className="text-center">
                  We provide exceptional services in developing dynamic and
                  interactive websites utilizing the WordPress platform to
                  deliver engaging user experiences.
                </p>
              </blockquote>
            </div>
            <div className="flex flex-col items-center justify-start rounded-t-lg border-b border-primary-main p-8 text-center md:rounded-t-none md:rounded-tl-lg md:border-b-0 md:border-r">
              <blockquote className="mx-auto max-w-2xl text-light-heading-secondary">
                <h3 className="mb-4 text-lg font-semibold text-light-heading-primary dark:text-dark-heading-primary">
                  E-commerce Websites
                </h3>
                <p className="text-center">
                  We offer expert design and implementation services for
                  e-commerce websites using the WooCommerce platform to deliver
                  a seamless online shopping experience.
                </p>
              </blockquote>
            </div>
            <div className="flex flex-col items-center justify-start rounded-t-lg border-b border-primary-main p-8 text-center md:rounded-t-none md:rounded-tl-lg md:border-b-0 md:border-r">
              <blockquote className="mx-auto max-w-2xl text-light-heading-secondary">
                <h3 className="mb-4 text-lg font-semibold text-light-heading-primary dark:text-dark-heading-primary">
                  API and 3rd Party Integration
                </h3>
                <p className="text-center">
                  We provide seamless integration of 3rd party services and
                  creation of custom APIs for your data to enhance the
                  functionality and efficiency of your website.
                </p>
              </blockquote>
            </div>
            <div className="flex flex-col items-center justify-start rounded-t-lg border-b border-primary-main p-8 text-center md:rounded-t-none md:rounded-tl-lg md:border-b-0 md:border-r">
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
            <div className="flex flex-col items-center justify-start rounded-t-lg border-primary-main p-8 text-center md:rounded-t-none md:rounded-tl-lg md:border-b-0 md:border-r">
              <blockquote className="mx-auto max-w-2xl text-light-heading-secondary">
                <h3 className="mb-4 text-lg font-semibold text-light-heading-primary dark:text-dark-heading-primary">
                  Server Management/Hosting
                </h3>
                <p className="text-center">
                  We provide comprehensive server management services, including
                  configuration, setup, and Cloudflare integration to ensure
                  optimal website uptime and security.
                </p>
              </blockquote>
            </div>
          </div>

          <div className="flex items-center justify-center text-center">
            <Link
              href="/contact"
              className="select-none rounded-full border border-primary-main p-2 px-5 text-primary-main transition-all duration-500 hover:border-transparent hover:bg-primary-hover hover:text-og-text"
            >
              Enquire Now
            </Link>
          </div>
        </section>
      </div>
    </Main>
  );
};

export default Index;
