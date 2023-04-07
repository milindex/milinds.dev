/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line import/no-extraneous-dependencies
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import Validator from 'validatorjs';

import ContactUsSVG from '@/components/svg/contactus';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { database } from '@/utils/firebase';

const dbInstance = collection(database, 'contact-us');

const runValidation = (formFields: any) => {
  const rules = {
    Name: 'required|min:3|regex:/^[a-zA-Z ]{2,30}$/', // alpha_spaces
    Email: 'required|email',
    Message: 'required|min:2|max:500', // alpha_spaces
  };

  const errorMessages = {
    'Name.required': 'Name is required',
    'Name.min': 'Name must be at least 3 characters',
    'Name.regex': 'Name must be only letters and spaces',
    'Email.required': 'Email is required',
    'Email.email': 'Email is invalid',
    'Message.required': 'Message is required',
    'Message.min': 'Message must be at least 2 characters',
    'Message.max': 'Message must be less than 500 characters',
  };

  const validation = new Validator(formFields, rules, errorMessages);

  validation.passes(); // true
  validation.fails(); // false

  return validation;
};

function Contact() {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setsenderEmail] = useState('');
  const [senderMessage, setsenderMessage] = useState('');
  const [formErrors, setFormErrors] = useState<any>(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [unexpectedError, setUnexpectedError] = useState<boolean>(false);

  // use debounce hook to delay the senderName, senderEmail, senderMessage state updates
  const [debouncedSenderName] = useDebounce(senderName, 50);
  const [debouncedSenderEmail] = useDebounce(senderEmail, 50);
  const [debouncedSenderMessage] = useDebounce(senderMessage, 50);

  const liveValidation = () => {
    const validation = runValidation({
      Name: debouncedSenderName,
      Email: debouncedSenderEmail,
      Message: debouncedSenderMessage,
    });

    if (validation.fails()) {
      setFormErrors(validation.errors.all());
      return;
    }

    setFormErrors(null);
  };

  const saveMessage = () => {
    const validation = runValidation({
      Name: debouncedSenderName,
      Email: debouncedSenderEmail,
      Message: debouncedSenderMessage,
    });

    if (validation.fails()) {
      setFormErrors(validation.errors.all());
      return;
    }

    setFormErrors(null);

    // save data to firestore
    try {
      addDoc(dbInstance, {
        Name: debouncedSenderName,
        Email: debouncedSenderEmail,
        Message: debouncedSenderMessage,
      }).then((resp) => {
        if (resp.id) {
          setSenderName('');
          setsenderEmail('');
          setsenderMessage('');
          setSuccessMessage(
            `Your messages has been sent successfully. I'll get back to you soon.`
          );
          setUnexpectedError(false);
        } else {
          setUnexpectedError(true);
          setTimeout(() => {
            setUnexpectedError(false);
          }, 3000);
        }
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      });
    } catch (error) {
      setUnexpectedError(true);
      setTimeout(() => {
        setUnexpectedError(false);
      }, 3000);
    }
  };

  const handleSubmit = () => {
    saveMessage();
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
      <section className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 rounded-lg px-8 py-16 text-light-heading-secondary dark:text-dark-heading-secondary md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
        <div className="flex flex-col text-center lg:text-left">
          <h2 className="text-4xl font-bold leading-tight text-light-heading-primary dark:text-dark-heading-primary lg:text-5xl">
            Lets talk about everything!
          </h2>
          <div className="mt-8">
            Hate forms? Send me an{' '}
            <span className="underline">
              <a href="mailto:connect@milinds.dev">email</a>
            </span>{' '}
            instead.
          </div>
          <div className="mt-8 bg-[var(--light-bg)] text-center dark:bg-[var(----dark-bg)]">
            {/* <object
              data="/assets/images/svg/contact-us.svg"
              type="image/svg+xml"
            /> */}
            <div className="mx-auto h-auto w-3/4 md:mx-0">
              <ContactUsSVG />
            </div>
          </div>
        </div>

        <div className="">
          {/* <div>
            <pre>{JSON.stringify(formErrors, null, 2)}</pre>
          </div> */}

          {/* run validation as user types */}
          {/* <form> */}
          {/* {senderName} */}
          <div className="relative">
            <input
              value={senderName || ''}
              className={`placeholder:text-heading-secondary mt-2 w-full rounded-lg border border-light-textfield-border bg-light-textfield-primary p-3 text-light-textfield-color focus:outline-none dark:border-dark-textfield-border dark:bg-dark-textfield-primary dark:text-dark-heading-primary`}
              type="text"
              placeholder="Name*"
              // setSenderName & perform validation
              onChange={(e) => {
                setSenderName(e.target.value);
              }}
              required
              pattern="/^[a-zA-Z ]{2,30}$/"
              onBlur={() => {
                liveValidation();
              }}
            />
            {formErrors?.Name && (
              <div className="absolute w-full animate-pulse-twice text-center text-sm text-red-500 lg:text-left">
                {formErrors.Name[0]}
              </div>
            )}
          </div>
          {/* {senderEmail} */}
          <div className="relative mt-8">
            <input
              // initial value of the field from state
              value={senderEmail || ''}
              className={`placeholder:text-heading-secondary mt-2 w-full rounded-lg border border-light-textfield-border bg-light-textfield-primary p-3 text-light-textfield-color focus:outline-none dark:border-dark-textfield-border dark:bg-dark-textfield-primary dark:text-dark-heading-primary ${
                formErrors?.Email ? ' input-error' : ''
              }`}
              type="email"
              placeholder="Email*"
              onChange={(e) => {
                setsenderEmail(e.target.value);
              }}
              required
              pattern="/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/"
              onBlur={() => {
                liveValidation();
              }}
            />
            {formErrors?.Email && (
              <div className="absolute w-full animate-pulse-twice text-center text-sm text-red-500 lg:text-left">
                {formErrors.Email[0]}
              </div>
            )}
          </div>
          {/* {senderMessage} */}
          <div className="relative mt-8">
            <textarea
              value={senderMessage || ''}
              className={`placeholder:text-heading-secondary mt-2 w-full rounded-lg border border-light-textfield-border bg-light-textfield-primary p-3 text-light-textfield-color focus:outline-none dark:border-dark-textfield-border dark:bg-dark-textfield-primary dark:text-dark-heading-primary ${
                formErrors?.Email ? ' input-error' : ''
              }`}
              onChange={(e) => {
                setsenderMessage(e.target.value);
              }}
              required
              placeholder="Your message"
              onBlur={() => {
                liveValidation();
              }}
            ></textarea>
            {formErrors?.Message && (
              <div className="absolute w-full animate-pulse-twice text-center text-sm text-red-500 lg:text-left">
                {formErrors.Message[0]}
              </div>
            )}
          </div>
          <div className="mt-8">
            {/* display successMessage after succesfull form submission, hide submit button */}
            {successMessage ? (
              <div className="text-green-500">{successMessage}</div>
            ) : (
              <button
                className="mx-auto flex select-none rounded-full border border-primary-main bg-primary-hover p-2 pr-3 text-og-text transition-all duration-500 hover:border-transparent hover:bg-primary-main hover:text-og-text"
                onClick={handleSubmit}
                type="submit"
              >
                Send Message
              </button>
            )}

            {/* if there is any other error print here */}
            {unexpectedError && (
              <div className="mt-4 animate-pulse-twice text-orange-500">
                ⚠️ Your message was not sent. Please email me{' '}
                <a href="mailto:connect@milinds.dev">here</a> ⚠️
              </div>
            )}
          </div>
          {/* </form> */}
        </div>
        <style jsx>{`
          .input-error {
            border-color: #f56565;
          }
        `}</style>
      </section>
    </Main>
  );
}

export default Contact;
