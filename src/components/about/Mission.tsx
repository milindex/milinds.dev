import AccentImage from '../support/AccentImage';

function Mission() {
  return (
    <section className="py-[30px] lg:py-[60px]">
      <div className="gap-8 lg:grid lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="mb-16 lg:order-1 lg:col-span-5 lg:mb-0">
          <AccentImage
            src="/assets/images/freelance.jpg"
            alt="I make Websites & Softwares"
            height={368}
            width={490}
            title="No, this is not a filter, I just happen to look like this person"
          />
        </div>
        <div className="lg:order-2 lg:col-span-7">
          <div className="">
            <p className="mb-4 text-[18px]">
              I’m on a mission to make the web faster, easier to use, prettier,
              accessible to all, and frustration-free. No matter your business
              needs, tackling these challenges will lead to online success.
            </p>
            <p className="mb-4 text-[18px]">
              My primary expertise is in back-end development, but I also have
              an interest in design. Creating a modern website requires
              integrating design, server technology, and user interaction.
              Knowing both design and development allows me to craft exceptional
              user experiences.
            </p>
            <p className="mb-4 text-[18px]">
              I strive to not only meet but exceed your expectations with
              high-quality work. I enjoy learning about your company and its
              goals to contribute to the success of your website. By analyzing
              metrics and making data-driven decisions, I aim to achieve higher
              levels of success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
