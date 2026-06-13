'use client';

import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import Validator from 'validatorjs';
import { database } from '@/utils/firebase';
import { SiteConfig } from '@/constants';

const dbInstance = collection(database, 'contact-us');

const runValidation = (formFields: { Name: string; Email: string; Message: string }) => {
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
  const [senderEmail, setSenderEmail] = useState('');
  const [senderMessage, setSenderMessage] = useState('');
  const [formErrors, setFormErrors] = useState<Record<string, string[]> | null>(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [unexpectedError, setUnexpectedError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [debouncedSenderName] = useDebounce(senderName, 50);
  const [debouncedSenderEmail] = useDebounce(senderEmail, 50);
  const [debouncedSenderMessage] = useDebounce(senderMessage, 50);

  const validate = () => {
    const validation = runValidation({
      Name: debouncedSenderName,
      Email: debouncedSenderEmail,
      Message: debouncedSenderMessage,
    });
    if (validation.fails()) {
      setFormErrors(validation.errors.all());
      return false;
    }
    setFormErrors(null);
    return true;
  };

  const saveMessage = async () => {
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const resp = await addDoc(dbInstance, {
        Name: debouncedSenderName,
        Email: debouncedSenderEmail,
        Message: debouncedSenderMessage,
      });
      if (resp.id) {
        setSenderName('');
        setSenderEmail('');
        setSenderMessage('');
        setSuccessMessage("Your message has been sent successfully. I'll get back to you soon.");
        setTimeout(() => setSuccessMessage(''), 4000);
      }
    } catch {
      setUnexpectedError(true);
      setTimeout(() => setUnexpectedError(false), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass = (hasError: boolean) =>
    `w-full rounded-[12px] border p-3.5 text-sm bg-surface-1 text-text-primary placeholder-text-muted transition-all duration-200 outline-none ${
      hasError
        ? 'border-error/50 focus:border-error'
        : 'border-white/[0.05] focus:border-brand-primary/50'
    }`;

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: Contact Info */}
        <div>
          <h1 className="text-4xl font-bold text-text-primary md:text-5xl">
            Let&apos;s work together
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            Whether you&apos;re launching a new product, improving an existing
            platform or looking for technical leadership, I&apos;d be happy to
            discuss how I can help.
          </p>

          <div className="mt-10 space-y-6">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#FD5735" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                  Email
                </p>
                <a
                  href={`mailto:${SiteConfig.email}`}
                  className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  {SiteConfig.email}
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success/10">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-success" />
                </span>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                  Availability
                </p>
                <p className="text-sm text-text-secondary">
                  Available for Select Projects
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#FD5735" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                  Social
                </p>
                <div className="flex gap-4">
                  <a
                    href={SiteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    GitHub
                  </a>
                  <a
                    href={SiteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="rounded-[20px] border border-white/[0.05] bg-surface-1 p-6 md:p-8">
          <div className="space-y-5">
            {/* Name */}
            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-text-muted">
                Name
              </label>
              <input
                value={senderName}
                className={fieldClass(!!formErrors?.Name)}
                type="text"
                placeholder="Your name"
                onChange={(e) => setSenderName(e.target.value)}
                onBlur={validate}
              />
              {formErrors?.Name && (
                <p className="mt-1 text-xs text-error">{formErrors.Name[0]}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-text-muted">
                Email
              </label>
              <input
                value={senderEmail}
                className={fieldClass(!!formErrors?.Email)}
                type="email"
                placeholder="your@email.com"
                onChange={(e) => setSenderEmail(e.target.value)}
                onBlur={validate}
              />
              {formErrors?.Email && (
                <p className="mt-1 text-xs text-error">{formErrors.Email[0]}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-text-muted">
                Message
              </label>
              <textarea
                value={senderMessage}
                className={`${fieldClass(!!formErrors?.Message)} min-h-[120px] resize-y`}
                placeholder="Tell me about your project"
                onChange={(e) => setSenderMessage(e.target.value)}
                onBlur={validate}
              />
              {formErrors?.Message && (
                <p className="mt-1 text-xs text-error">{formErrors.Message[0]}</p>
              )}
            </div>
          </div>

          {/* Submit */}
          <button
            onClick={saveMessage}
            disabled={isSubmitting}
            className="mt-6 inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-[12px] bg-cta-primary px-8 text-base font-medium text-white [text-shadow:0_1px_1px_rgba(0,0,0,0.35)] transition-all duration-200 hover:bg-cta-hover hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
          >
            {isSubmitting && (
              <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            )}
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {/* Success */}
          {successMessage && (
            <div className="mt-4 rounded-[12px] bg-success/10 px-4 py-3 text-sm text-success">
              {successMessage}
            </div>
          )}

          {/* Error */}
          {unexpectedError && (
            <div className="mt-4 rounded-[12px] bg-error/10 px-4 py-3 text-sm text-error">
              Something went wrong. Please email me at{' '}
              <a href={`mailto:${SiteConfig.email}`} className="underline">
                {SiteConfig.email}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
