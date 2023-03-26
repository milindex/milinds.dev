import Splide from '@splidejs/splide';
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

  const currentState = [
    `I'm working on a project for AngelOne at{' '}
		<a
			href="https://kraftpixel.com/"
			target="_blank"
			rel="noreferrer"
		>
			KraftPixel
		</a>`,
    `I'm working on my personal Portfolio website`,
  ];

  const chooseRandomState = () => {
    // if date is even, return 0, else return 1
    const date = new Date();
    const isEven = date.getDate() % 2 === 0;
    return isEven ? 0 : 1;
  };

  const splide = new Splide('.indian-clients', {
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
  });
  splide.mount();

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
            <div className="lg:col-span-8">
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
                I’m a Full Stack Developer specializing in building (and
                occasionally designing) complex digital experiences. Currently,{' '}
                {currentState[chooseRandomState()]}.
              </p>

              <div className="my-4 flex items-center justify-center gap-4 lg:mb-0 lg:justify-start">
                <Link
                  href="/contact"
                  className="flex rounded-full border border-primary-main bg-primary-hover p-2 pr-3 text-og-text hover:border-transparent hover:bg-primary-main hover:text-og-text"
                >
                  Let&apos;s Talk?
                </Link>
                <ResumeCTA />
              </div>
            </div>
            <div className="lg:col-span-4">
              <img
                src="/assets/images/hero-banner.jpg"
                alt="I make Websites & Softwares"
                height={368}
                width={490}
                className="rounded-2xl grayscale transition-all duration-500 ease-in-out hover:grayscale-0"
              />
            </div>
          </div>
        </section>

        <section className="about py-[30px] lg:py-[80px]">
          <p className="mb-8 text-center font-bold">
            Servered some of the best companies in the India
          </p>

          {/* splide slider */}
          <div className="indian-clients splide mb-8">
            <div className="splide__track my-4">
              <ul className="splide__list my-2 lg:flex lg:items-center lg:justify-center lg:gap-4">
                {/* clients */}
                {clients.map((client, index) => (
                  <li className="splide__slide" key={index}>
                    <img
                      src={`/assets/images/clients/${
                        Object.keys(client)[0]
                      }.png`}
                      alt={Object.values(client)[0]}
                      title={Object.values(client)[0]}
                      className={`h-[50px] w-auto ${
                        Object.keys(client)[0]
                      } grayscale transition-all duration-500 ease-in-out hover:grayscale-0`}
                    />
                  </li>
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
              </ul>
            </div>
          </div>

          <p className="mx-auto mb-8 text-center lg:max-w-2xl">
            While working on multiple projects, I&apos;ve gained experience in a
            wide range of technologies and frameworks. Such as VueJS,
            AMP(Accelerated Mobile Pages), Cloudflare etc.
          </p>

          <div className="flex items-center justify-center text-center">
            <Link
              href="/projects"
              className="rounded-full border border-primary-main p-2 pr-3 text-primary-main hover:border-transparent hover:bg-primary-hover hover:text-og-text"
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
