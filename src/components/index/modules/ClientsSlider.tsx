/* eslint-disable tailwindcss/no-custom-classname */
import '@splidejs/react-splide/css';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

function ClientsSlider() {
  const clients = [
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
    <>
      <Splide
        hasTrack={false}
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
      >
        <div className="indian-clients-slider">
          <SplideTrack>
            {clients.map((client, index) => (
              <SplideSlide key={index}>
                <img
                  src={`/assets/images/clients/${Object.keys(client)[0]}.png`}
                  alt={Object.keys(client)[0]}
                  width={Object.values(client)[0].width}
                  height={Object.values(client)[0].height}
                  title={Object.values(client)[0].title}
                  className={`h-[50px] w-auto ${
                    Object.keys(client)[0]
                  } mx-auto select-none hover:scale-110 lg:grayscale lg:transition-all lg:duration-500 lg:ease-in-out lg:hover:grayscale-0`}
                />
              </SplideSlide>
            ))}
          </SplideTrack>
        </div>
      </Splide>
      <style jsx global>{`
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

        @media (max-width: 640px) {
          .indian-clients-slider .splide__track {
            padding-bottom: 2.5rem;
          }
          .indian-clients-slider .splide__pagination {
            padding-top: 25px;
            gap: 0.25rem;
          }
          .indian-clients-slider .splide__pagination__page.is-active {
            background: var(--primary-color);
            width: 16px;
            border-radius: 9999px;
            transform: scale(1.2);
          }
        }
        @media (min-width: 640px) {
          .indian-clients-slider .splide__list {
            display: flex !important;
            flex-wrap: wrap;
            align-content: center;
            justify-content: center;
            align-items: center;
            gap: 40px;
            padding-bottom: 2rem !important;
          }
        }
      `}</style>
    </>
  );
}

export default ClientsSlider;
