import { useEffect, useState } from 'react';

import AccentImage from '../support/AccentImage';

function Greetings() {
  const [timeOfDay, setTimeOfDay] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setTimeOfDay('morning');
    } else if (hour >= 12 && hour < 18) {
      setTimeOfDay('afternoon');
    } else {
      setTimeOfDay('evening');
    }
  }, []);

  return (
    <section className="py-[30px] lg:py-[60px]">
      <h1 className="mb-6 text-3xl font-bold lg:text-4xl">Good {timeOfDay}!</h1>
      <div className="lg:flex lg:items-center lg:justify-between lg:gap-8">
        <div className="mb-16 lg:order-2 lg:mb-0 lg:basis-1/4">
          <AccentImage
            src="/assets/images/Milind-Sonawane.jpg"
            alt="This is actually me, Milind Sonawane"
            height={350}
            width={350}
            title="No, this is not a filter, I just happen to look like this person"
          />
        </div>
        <div className="lg:order-1 lg:basis-3/4">
          <div>
            <p className="mb-4 text-lg lg:text-xl">
              Hi there, I&apos;m Milind Sonawane, a full-stack developer based
              in [your location].
            </p>
            <p className="mb-4 text-lg lg:text-xl">
              I&apos;m passionate about building web applications that make a
              difference in people&apos;s lives. My journey with coding started
              back in college when I discovered the thrill of running JavaScript
              programs from my textbook. Since then, I&apos;ve been constantly
              learning and improving my skills.
            </p>
            <p className="mb-4 text-lg lg:text-xl">
              With several years of experience in web development, I have
              designed and developed a wide range of digital products, including
              websites, mobile apps, and desktop software. I specialize in using
              modern web technologies like React, Next.js, Node.js, and other
              related frameworks and libraries to build robust and user-friendly
              products that solve real-world problems.
            </p>
            <p className="mb-4 text-lg lg:text-xl">
              One project I&apos;m particularly proud of is the redesign of a
              complex e-commerce website that had been struggling with high
              bounce rates and low conversions. I used my expertise in
              user-centered design and website optimization to create a new
              layout and navigation structure that improved the user experience
              and increased conversions by 30%.
            </p>
            <p className="mb-4 text-lg lg:text-xl">
              Currently, I&apos;m working on revamping a big chunk of a secret
              website, where I&apos;m using cutting-edge tools like Next.js and
              Tailwind CSS to create a lightning-fast and highly responsive user
              interface. I&apos;m always eager to learn new things and expand my
              skills, and I&apos;m excited to see where my coding journey will
              take me next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Greetings;
