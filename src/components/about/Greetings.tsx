import AccentImage from '../support/AccentImage';

function Greetings() {
  return (
    <section className="py-[30px] lg:py-[60px]">
      <h1 className="mb-4 text-xl lg:text-2xl">Greetings!!</h1>

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
          <div className="">
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
  );
}

export default Greetings;
