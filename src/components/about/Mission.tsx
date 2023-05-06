import AccentImage from '../support/AccentImage';

function Mission() {
  return (
    <section className="py-6 lg:py-12">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="order-2 col-span-7">
          <h2 className="mb-6 text-3xl font-bold lg:text-4xl">My Mission</h2>
          <div className="">
            <p className="mb-4 text-lg lg:text-xl">
              My mission is to create digital experiences that are beautiful,
              fast, user-friendly, and accessible to all. Whether you&apos;re a
              small business owner or a large corporation, I believe that a
              great website or software can help you achieve your goals and
              reach your audience more effectively.
            </p>
            <p className="mb-4 text-lg lg:text-xl">
              My expertise lies primarily in back-end development, but I also
              have a strong interest in design. By combining these skills,
              I&apos;m able to create seamless and intuitive user experiences
              that integrate design, server technology, and user interaction. I
              always strive to exceed your expectations with high-quality work
              and a commitment to excellence.
            </p>
            <p className="mb-4 text-lg lg:text-xl">
              To achieve this, I analyze metrics and make data-driven decisions
              to continuously improve and optimize your digital products. I
              believe that every project is an opportunity to learn, grow, and
              push the boundaries of what&apos;s possible. Let&apos;s work
              together to create something amazing.
            </p>
          </div>
        </div>
        <div className="order-1 col-span-5">
          <AccentImage
            src="/assets/images/freelance.jpg"
            alt="I make Websites & Softwares"
            height={368}
            width={490}
            title="No, this is not a filter, I just happen to look like this person"
          />
        </div>
      </div>
    </section>
  );
}

export default Mission;
