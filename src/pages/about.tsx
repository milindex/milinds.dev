/* eslint-disable tailwindcss/no-custom-classname */
import Greetings from '@/components/about/Greetings';
import Mission from '@/components/about/Mission';
import WordpressSection from '@/components/about/Wordpress';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

// add Style in <style jsx> tag

const About = () => (
  <Main
    meta={
      <Meta
        title="About Milind Sonawane | Full Stack Web Developer"
        description="Meet Milind Sonawane, a full-stack web engineer with expertise in HTML, CSS, JavaScript, and WordPress development. Discover his skills and passion for open-source technologies."
      />
    }
  >
    {/* <section className="pt-[30px] lg:pt-[80px]">
      <h1 className="text-center text-xl font-bold text-light-heading-secondary dark:text-dark-heading-secondary lg:mb-8 lg:text-left lg:text-3xl">
        About Milind Sonawane
      </h1>
    </section> */}

    <Greetings />
    <Mission />
    <WordpressSection />
  </Main>
);

export default About;
