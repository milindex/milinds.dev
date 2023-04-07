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
          .accent-image-container .accent-overlay {
            position: absolute;
            background-color: rgba(251, 85, 60, 0.8);
            height: 100%;
            width: 100%;
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
          }
          .accent-image-container .accent-image {
            mix-blend-mode: multiply;
            filter: grayscale(100%);
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
          }
          .accent-image-container:hover .accent-overlay {
            display: none;
          }
          .accent-image-container:hover .accent-image {
            filter: none;
            mix-blend-mode: normal;
          }
          .accent-image-container:hover:after {
            top: 10px;
            left: 10px;
          }
          .accent-image-container:before,
          .accent-image-container:after {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 1rem;
            z-index: -1;
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
          }
          .accent-image-container:after {
            border: 2px solid #fb553c;
            top: 20px;
            left: 20px;
            z-index: -1;
          }
        `}
      </style>
    </>
  );
}

export default AccentImage;
