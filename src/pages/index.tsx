import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
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

        <section className="hero">
          <div className="lg:grid lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <h1 className="font-bold text-primary-main lg:text-xl">
                Hi, my name is
              </h1>
              <h2 className=" font-bold text-light-heading-primary dark:text-dark-heading-primary lg:text-6xl">
                Milind Sonawane.
              </h2>
              <h3 className="font-bold text-light-heading-secondary dark:text-dark-heading-secondary lg:text-6xl">
                I make Websites & Softwares
              </h3>
              <p className="text-justify lg:max-w-xl">
                I’m a Full Stack Developer specializing in building (and
                occasionally designing) complex digital experiences. Currently,
                I’m working on a project for AngelOne at{' '}
                <a
                  href="https://kraftpixel.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  KraftPixel
                </a>
                .
              </p>
            </div>
            <div className="lg:col-span-4">
              <img
                src="/assets/images/hero-banner.jpg"
                alt="I make Websites & Softwares"
                height={368}
                width={490}
                className="rounded-2xl"
              />
            </div>
          </div>
        </section>
      </div>
    </Main>
  );
};

export default Index;
