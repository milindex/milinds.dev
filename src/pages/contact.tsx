// eslint-disable-next-line import/no-extraneous-dependencies
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { database } from '@/utils/firebase';

const dbInstance = collection(database, 'contact-us');

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const saveMessage = () => {
    // check if all fields are filled
    console.log(name, email, message);

    // save message to firebase
    addDoc(dbInstance, {
      name,
      email,
      message,
    })
      .then(() => {
        alert('Message sent successfully');
        // reset form
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
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

        <div className="">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div>
            <button
              type="submit"
              className="button button-primary button-wide button-shadow button-rounded button-large m-0 my-3"
              onClick={saveMessage}
            >
              Send
            </button>
          </div>
        </div>
      </section>
    </Main>
  );
}

export default Contact;
