'use client';

import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import Validator from 'validatorjs';

import ContactUsSVG from '@/components/svg/contactus';
import { database } from '@/utils/firebase';

const dbInstance = collection(database, 'contact-us');

const runValidation = (formFields: any) => {
  const rules = {
    Name: 'required|min:3|regex:/^[a-zA-Z ]{2,30}$/',
    Email: 'required|email',
    Message: 'required|min:2|max:500',
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
  validation.passes();
  validation.fails();
  return validation;
};

function ContactForm() {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setsenderEmail] = useState('');
  const [senderMessage, setsenderMessage] = useState('');
  const [formErrors, setFormErrors] = useState<any>(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [unexpectedError, setUnexpectedError] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

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
    setIsSubmitting(true);
    saveMessage();
    setIsSubmitting(false);
  };

  return (
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
          <div className="mx-auto h-auto w-3/4 md:mx-0">
            <ContactUsSVG />
          </div>
        </div>
      </div>

      <div className="">
        <div className="relative">
          <input
            value={senderName || ''}
            className={`placeholder:text-heading-secondary mt-2 w-full rounded-lg border border-light-textfield-border bg-light-textfield-primary p-3 text-light-textfield-color focus:outline-none dark:border-dark-textfield-border dark:bg-dark-textfield-primary dark:text-dark-heading-primary`}
            type="text"
            placeholder="Name*"
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
        <div className="relative mt-8">
          <input
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
          <button
            className={`mx-auto flex select-none rounded-lg border border-primary-main bg-primary-hover p-2 pr-3 text-og-text transition-all duration-500 hover:border-transparent hover:bg-primary-main hover:text-og-text ${
              isSubmitting ? 'disabled' : ''
            }`}
            onClick={handleSubmit}
            type="submit"
          >
            {isSubmitting && (
              <svg
                className="ml-1 mr-3 h-5 w-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
            {isSubmitting ? 'Sending Message' : 'Send Message'}
          </button>

          {successMessage && (
            <div className="text-green-500">{successMessage}</div>
          )}

          {unexpectedError && (
            <div className="mt-4 animate-pulse-twice text-orange-500">
              ⚠️ Your message was not sent. Please email me{' '}
              <a href="mailto:connect@milinds.dev">here</a> ⚠️
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .input-error {
          border-color: #f56565;
        }
      `}</style>
    </section>
  );
}

export default ContactForm;
