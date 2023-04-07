/* eslint-disable tailwindcss/no-custom-classname */
import AccentImage from '@/components/support/AccentImage';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

// add Style in <style jsx> tag

const About = () => (
  <Main
    meta={
      <Meta
        title="About Milind Sonawane | Full Stack Web Developer"
        description="Meet Milind Sonawane, a full-stack web developer with expertise in HTML, CSS, JavaScript, and WordPress development. Discover his skills and passion for open-source technologies."
      />
    }
  >
    {/* <section className="pt-[30px] lg:pt-[80px]">
      <h1 className="text-center text-xl font-bold text-light-heading-secondary dark:text-dark-heading-secondary lg:mb-8 lg:text-left lg:text-3xl">
        About Milind Sonawane
      </h1>
    </section> */}

    <section className="py-[30px] lg:py-[60px]">
      <div className="gap-8 lg:flex lg:items-center lg:justify-between">
        <div className="lg:order-2 lg:basis-1/4">
          <AccentImage
            src="/assets/images/Milind-Sonawane.jpg"
            alt="This is actually me, Milind Sonawane"
            height={350}
            width={350}
            title="No, this is not a filter, I just happen to look like this person"
          />
        </div>
        <div className="lg:order-1 lg:basis-3/4">
          <div className="">
            <h1 className="mb-4 text-xl lg:text-2xl">Greetings!!</h1>
            <p className="mb-4 text-[18px]">
              I possess a diverse skill set and specialize in designing and
              developing digital products. This is where I devote most of my
              time and energy I’m a programmer who loves coffee and coding. My
              passion for coding started in college when I discovered the thrill
              of running JavaScript programs from my textbook.
            </p>
            <p className="mb-4 text-[18px]">
              I began my professional journey as an intern in 2017 and quickly
              mastered advanced JavaScript, GIT, CSS3, jQuery, PHP (WordPress),
              and object-oriented programming. I continued to hone my skills in
              JS, Node.js, WordPress custom themes, DBMS, website optimization,
              and more.
            </p>
            <p className="mb-4 text-[18px]">
              Currently, I’m working on Revamping a big chunck of a secret
              Website. I’m proficient in JS, Node, React, Webpack/Babel, SASS,
              CSS, HTML, Git, SQL, PHP, Laravel and WordPress and always eager
              to learn more.{' '}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="py-[30px] lg:py-[60px]">
      <div className="gap-8 lg:grid lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="lg:order-1 lg:col-span-5">
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

    <section>
      <div className="mb-8">
        <h2 className="mb-1 text-2xl text-primary-main transition duration-300 ease-in-out hover:border-primary-hover">
          Wordpress Developer?
        </h2>
        <p className="mb-4 text-[18px]">
          Many of projects that I’ve worked on require website content
          management. With 5 years of experience in WordPress, the world’s most
          popular content management system, I prioritize ease of use and
          maintainability. My goal is to make managing your content as
          effortless and efficient as possible.
        </p>
      </div>
    </section>
  </Main>
);

export default About;
