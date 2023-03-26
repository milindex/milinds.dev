import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Contact = () => (
  <Main
    meta={
      <Meta
        title="Let's work together & make something awesome | Milind Sonawane"
        description="Get in touch with me to discuss your project. I'm available for freelance work."
      />
    }
  >
    <section>
      <h1>Lets work together</h1>
      <p>
        Let me help you become even greater at what you do, Fill out the form
        below & I&apos;ll get in touch with you within a Day.
      </p>

      <form className="">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols={30} rows={10} />
        </div>

        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </section>
  </Main>
);

export default Contact;
