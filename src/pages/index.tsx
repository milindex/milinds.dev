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
    {
      '5paisa': '5paisa is a leading discount stockbroker in India',
    },
    {
      acko: 'Acko General Insurance is a private sector general insurance company in India',
    },
    { angelone: 'Angel One is an Indian stockbroker firm established in 1996' },
    {
      atomberg:
        "Atomberg is in the business of revolutionizing India's home appliances",
    },
    {
      kapiva:
        'Kapiva is a modern Ayurvedic nutrition brand that is dedicated to the ideas of sustenance and quality at its core',
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

        <section className="hero py-[30px] lg:py-[80px]">
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
              <p className="text-center lg:max-w-2xl lg:text-justify">
                I&apos;m a Full Stack Developer specializing in building (and
                occasionally designing) complex digital experiences. Currently,{' '}
                I&apos;m working on a React Project.
              </p>

              <div className="my-4 flex items-center justify-center gap-4 lg:mb-0 lg:justify-start">
                <Link
                  href="/contact"
                  className="user-select-none flex rounded-full border border-primary-main bg-primary-hover p-2 pr-3 text-og-text transition-all duration-500 hover:border-transparent hover:bg-primary-main hover:text-og-text"
                >
                  Let&apos;s Talk?
                </Link>
                <ResumeCTA />
              </div>
            </div>
            <div className="banner-image-container lg:col-span-5">
              <img
                src="/assets/images/hero-banner.jpg"
                alt="I make Websites & Softwares"
                height={368}
                width={490}
                className="banner-image w-full rounded-2xl grayscale transition-all duration-500 ease-in-out hover:grayscale-0"
              />
            </div>
          </div>
        </section>

        <section className="about py-[30px] lg:py-[80px]">
          <p className="mb-8 text-center font-bold">
            Servered some of the best companies in the India
          </p>

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
                  title={Object.values(client)[0]}
                  className={`h-[50px] w-auto ${
                    Object.keys(client)[0]
                  } mx-auto hover:scale-110 lg:grayscale lg:transition-all lg:duration-500 lg:ease-in-out lg:hover:grayscale-0`}
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

          <p className="mx-auto mb-8 text-center lg:max-w-2xl">
            While working on multiple projects, I&apos;ve gained experience in a
            wide range of technologies and frameworks. Such as VueJS,
            AMP(Accelerated Mobile Pages), Cloudflare etc.
          </p>

          <div className="flex items-center justify-center text-center">
            <Link
              href="/projects"
              className="rounded-full border border-primary-main p-2 pr-3 text-primary-main transition-all duration-500 hover:border-transparent hover:bg-primary-hover hover:text-og-text"
            >
              Checkout all Projects
            </Link>
          </div>
        </section>
      </div>
    </Main>
  );
};

export default Index;
