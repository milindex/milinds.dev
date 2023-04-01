/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line import/no-extraneous-dependencies
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useThrottle } from 'use-throttle';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { database } from '@/utils/firebase';

const dbInstance = collection(database, 'contact-us');

const schema: any = {
  senderName: {
    required: true,
    minLength: 3,
    maxLength: 50,
    pattern: /^[a-zA-Z ]{2,30}$/,
  },
  senderEmail: {
    required: true,
    pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  },
  senderMessage: {
    required: true,
  },
};

const errors: any = {
  senderName: {
    required: 'Please enter your name',
    minLength: 'Name should be at least 3 characters long',
    maxLength: 'Name should be at most 50 characters long',
    pattern: 'Please enter a valid name',
  },
  senderEmail: {
    required: 'Please enter your email',
    pattern: 'Please enter a valid email',
  },
  senderMessage: {
    required: 'Please enter your message',
  },
};

const validate = (field: string, value: string, rules: any) => {
  let isValid = true;
  let error = null;

  // validation for all rules provided for the field
  Object.keys(rules).forEach((rule) => {
    if (isValid) {
      switch (rule) {
        case 'required':
          isValid = value.trim() !== '';
          if (!isValid) {
            error = errors[field][rule];
          }
          break;
        case 'minLength':
          isValid = value.length >= rules[rule];
          if (!isValid) {
            error = errors[field][rule];
          }
          break;
        case 'maxLength':
          isValid = value.length <= rules[rule];
          if (!isValid) {
            error = errors[field][rule];
          }
          break;
        case 'pattern':
          isValid = rules[rule].test(value);
          if (!isValid) {
            error = errors[field][rule];
          }
          break;
        default:
          isValid = true;
      }
    }
  });

  // console.log(isValid, error);

  return { isValid, error };
};

function Contact() {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setsenderEmail] = useState('');
  const [senderMessage, setsenderMessage] = useState('');
  const [formErrors, setFormErrors] = useState<any>(null);
  const [successMessage, setSuccessMessage] = useState('');

  // use debounce hook to delay the senderName, senderEmail, senderMessage state updates
  const [debouncedSenderName] = useDebounce(senderName, 50);
  const [debouncedSenderEmail] = useDebounce(senderEmail, 50);
  const [debouncedSenderMessage] = useDebounce(senderMessage, 50);

  const runValidation = () => {
    setFormErrors(null);
    const currentValues: any = {
      senderName,
      senderEmail,
      senderMessage,
    };

    // validate all fields
    Object.keys(schema).forEach((field) => {
      const { isValid, error } = validate(
        field,
        currentValues[field],
        schema[field]
      );

      if (isValid === false) {
        // formErrors[field] = error;
        setFormErrors((prevState: any) => ({
          ...prevState,
          [field]: error,
        }));
      }
    });

    return Object.keys(formErrors || {}).length === 0;
  };

  useThrottle(runValidation, 3000, { leading: false });

  const saveMessage = () => {
    if (
      !debouncedSenderName ||
      !debouncedSenderEmail ||
      !debouncedSenderMessage
    )
      return;

    // save data to firestore
    addDoc(dbInstance, {
      debouncedSenderName,
      debouncedSenderEmail,
      debouncedSenderMessage,
    })
      .then((resp) => {
        // reset form
        setSenderName('');
        setsenderEmail('');
        setsenderMessage('');

        // show success message
        setSuccessMessage('Message sent successfully!');

        // hide success message after 5 seconds
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  };

  const handleSubmit = () => {
    const isValid = runValidation();
    if (isValid) {
      saveMessage();
    }
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
        <div className="flex flex-col justify-between">
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
          <div className="mt-8 text-center">
            <object
              data="/assets/images/svg/contact-us.svg"
              type="image/svg+xml"
            />
          </div>
        </div>

        <div className="">
          {/* <div>
            <pre>{JSON.stringify(formErrors, null, 2)}</pre>
          </div> */}
          {/* {senderName} */}
          <div className="relative">
            <input
              value={senderName || ''}
              className={`mt-2 w-full rounded-lg border border-light-textfield-border bg-dark-textfield-primary p-3 text-light-textfield-primary placeholder:text-light-heading-primary focus:outline-none dark:border-light-textfield-border dark:bg-dark-textfield-primary dark:text-dark-heading-secondary dark:placeholder:text-dark-heading-primary${
                formErrors?.senderEmail ? ' input-error' : ''
              }`}
              type="text"
              placeholder="Name*"
              // setSenderName & perform validation
              onChange={(e) => {
                setSenderName(e.target.value);
                runValidation();
              }}
              required
            />
            {formErrors?.senderName && (
              <div className="absolute w-full text-center text-red-500 lg:text-left">
                {formErrors.senderName}
              </div>
            )}
          </div>
          {/* {senderEmail} */}
          <div className="relative mt-8">
            <input
              // initial value of the field from state
              value={senderEmail || ''}
              className={`mt-2 w-full rounded-lg border border-light-textfield-border bg-dark-textfield-primary p-3 text-light-textfield-primary placeholder:text-light-heading-primary focus:outline-none dark:border-light-textfield-border dark:bg-dark-textfield-primary dark:text-dark-heading-secondary dark:placeholder:text-dark-heading-primary${
                formErrors?.senderEmail ? ' input-error' : ''
              }`}
              type="email"
              placeholder="Email*"
              onChange={(e) => {
                setsenderEmail(e.target.value);
                runValidation();
              }}
              required
            />
            {formErrors?.senderEmail && (
              <div className="absolute w-full animate-pulse-twice text-center text-red-500 lg:text-left">
                {formErrors.senderEmail}
              </div>
            )}
          </div>
          {/* {senderMessage} */}
          <div className="relative mt-8">
            <textarea
              value={senderMessage || ''}
              className={`mt-2 w-full rounded-lg border border-light-textfield-border bg-dark-textfield-primary p-3 text-light-textfield-primary placeholder:text-light-heading-primary focus:outline-none dark:border-light-textfield-border dark:bg-dark-textfield-primary dark:text-dark-heading-secondary dark:placeholder:text-dark-heading-primary${
                formErrors?.senderEmail ? ' input-error' : ''
              }`}
              onChange={(e) => {
                setsenderMessage(e.target.value);
                runValidation();
              }}
              required
              placeholder="Your message"
            ></textarea>
            {formErrors?.senderMessage && (
              <div className="absolute w-full text-center text-red-500 lg:text-left">
                {formErrors.senderMessage}
              </div>
            )}
          </div>
          <div className="mt-8">
            {/* display successMessage after succesfull form submission, hide submit button */}
            {successMessage ? (
              <div className="text-green-500">{successMessage}</div>
            ) : (
              <button
                className="mx-auto flex rounded-full border border-primary-main bg-primary-hover p-2 pr-3 text-og-text transition-all duration-500 hover:border-transparent hover:bg-primary-main hover:text-og-text"
                onClick={handleSubmit}
                type="submit"
              >
                Send Message
              </button>
            )}
          </div>
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
