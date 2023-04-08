/* eslint-disable tailwindcss/no-custom-classname */
function AccentImage(props: any) {
  return (
    <>
      <div className="accent-image-container">
        <div className="accent-overlay w-full rounded-2xl transition-all duration-500 ease-in-out"></div>
        <img
          src={props.src}
          alt={props.alt}
          height={props.height}
          width={props.width}
          className="accent-image w-full rounded-2xl grayscale transition-all duration-500 ease-in-out hover:grayscale-0"
          title={props.title}
        />
      </div>
      <style jsx global>
        {`
          .accent-image-container {
            position: relative;
          }
          .accent-image-container * {
            transition: all 0.25s cubic-bezier(0.25, 0.1, 0.25, 1);
          }
          .accent-image-container .accent-overlay {
            position: absolute;
            background-color: var(--primary-color);
            height: 100%;
            width: 100%;
          }
          .accent-image-container .accent-image {
            mix-blend-mode: multiply;
            filter: grayscale(100%);
          }
          .accent-image-container:hover .accent-overlay {
            display: none;
          }
          .accent-image-container:hover .accent-image {
            filter: none;
            mix-blend-mode: normal;
          }
          @media screen and (min-width: 768px) {
            .accent-image-container:hover:after {
              top: 5px;
              left: 5px;
            }
          }
          .accent-image-container:before,
          .accent-image-container:after {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 1rem;
            transition: all 0.25s cubic-bezier(0.25, 0.1, 0.25, 1);
            top: 15px;
          }
          .accent-image-container:after {
            border: 2px solid #fb553c;
            z-index: -1;
          }
          @media screen and (min-width: 768px) {
            .accent-image-container:after {
              top: 15px;
              left: 15px;
            }
          }
        `}
      </style>
    </>
  );
}

export default AccentImage;
