/* eslint-disable tailwindcss/no-custom-classname */
const Timeline = () => {
  return (
    <section>
      <div className="py-8">
        <div className="container mx-auto my-12 flex flex-col items-start md:my-24 md:flex-row">
          <div className="sticky mt-2 flex w-full flex-col px-8 md:top-36 md:mt-12 lg:w-1/3">
            <p className="tracking-loose ml-2 uppercase text-primary-main">
              Working Process
            </p>
            <p className="mb-2 text-3xl leading-normal md:text-4xl md:leading-relaxed">
              Working Process of Fest
            </p>
            <p className="mb-4 text-sm md:text-base">
              Here’s your guide to the tech fest 2021 process. Go through all
              the steps to know the exact process of the fest.
            </p>
            <a
              href="#"
              className="mr-auto rounded border border-primary-main bg-transparent py-2 px-4 text-primary-main shadow hover:border-transparent hover:bg-primary-hover hover:text-white hover:shadow-lg"
            >
              Explore Now
            </a>
          </div>
          <div className="sticky ml-0 md:ml-12 lg:w-2/3">
            <div className="container mx-auto h-full w-full">
              <div className="wrap relative h-full overflow-hidden p-10">
                <div
                  className="absolute h-full border-2 border-primary-main"
                  style={{
                    left: '50%',
                    border: '2px solid var(--primary-color)',
                    borderRadius: '1%',
                  }}
                ></div>

                <div
                  className="absolute h-full border-2 border-primary-main"
                  style={{
                    left: '50%',
                    border: '2px solid var(--primary-color)',
                    borderRadius: '1%',
                  }}
                ></div>

                {/* <div className="left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-primary-main">
                      1-6 May, 2021
                    </p>
                    <h4 className="mb-3 text-lg font-bold md:text-2xl">
                      Registration
                    </h4>
                    <p className="text-sm leading-snug text-opacity-100 md:text-base">
                      Pick your favourite event(s) and register in that event by
                      filling the form corresponding to that event. Its that
                      easy :)
                    </p>
                  </div>
                </div> */}
                <div className="left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-primary-main">
                      Jan 2019 - May 2022
                    </p>
                    <h4 className="mb-3 text-lg font-bold md:text-2xl">
                      Web Developer
                    </h4>
                    <ul className="mb-3 text-sm leading-snug text-opacity-100 md:text-base">
                      <li>WordPress, PHP.</li>
                      <li>BigCommerce Custom Checkout/Vue.</li>
                      <li>Accelerated Mobile Pages (AMP) Automation.</li>
                      <li>Website Deployment & Optimization.</li>
                      <li>Server Configuration & Management.</li>
                      <li>Google App Script / Google Sheet Automation.</li>
                      <li>NodeRED, Nodejs, VueJS.</li>
                    </ul>
                    <p className="text-sm leading-snug text-opacity-100 md:text-base">
                      Skills: React.js · JavaScript · PHP
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="mx-auto -mt-36 md:-mt-36"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
