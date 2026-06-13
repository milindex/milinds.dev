'use client';

import { addDoc, collection } from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from 'use-debounce';
import Validator from 'validatorjs';
import gsap from 'gsap';
import { database } from '@/utils/firebase';
import { SiteConfig } from '@/constants';

const dbInstance = collection(database, 'contact-us');

const INQUIRY_TYPES = ['Freelance Project', 'Technical Consulting', 'Performance Audit', 'Full-Time Opportunity', 'Other'] as const;

const BUDGET_RANGES = ['Under \u20B950K', '\u20B950K\u2013\u20B92L', '\u20B92L\u2013\u20B95L', '\u20B95L+', 'Not Sure Yet'] as const;

const COMPANIES = ['HDFC Sky', 'Angel One', 'Kapiva', 'Atomberg'];

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
  const [inquiryType, setInquiryType] = useState('');
  const [budgetRange, setBudgetRange] = useState('');
  const [senderMessage, setSenderMessage] = useState('');
  const [formErrors, setFormErrors] = useState<Record<string, string[]> | null>(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [unexpectedError, setUnexpectedError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const introRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const [debouncedSenderName] = useDebounce(senderName, 50);
  const [debouncedSenderEmail] = useDebounce(senderEmail, 50);
  const [debouncedSenderMessage] = useDebounce(senderMessage, 50);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (introRef.current) {
        gsap.from(introRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
        });
      }
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power3.out',
          delay: 0.3,
        });
      }
      if (formRef.current) {
        gsap.from(formRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          delay: 0.2,
        });
      }
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (successMessage && successRef.current) {
      gsap.from(successRef.current, {
        scale: 0.98,
        duration: 0.4,
        ease: 'power3.out',
      });
    }
  }, [successMessage]);

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
        InquiryType: inquiryType,
        Budget: budgetRange,
        Message: debouncedSenderMessage,
        CreatedAt: new Date().toISOString(),
      });
      if (resp.id) {
        setSenderName('');
        setSenderEmail('');
        setInquiryType('');
        setBudgetRange('');
        setSenderMessage('');
        setSuccessMessage('Thanks for reaching out.');
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

  const pillClass = (isSelected: boolean) =>
    `cursor-pointer rounded-full border px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
      isSelected
        ? 'border-brand-primary bg-brand-primary/10 text-brand-primary'
        : 'border-white/[0.05] text-text-muted hover:border-white/20 hover:text-text-secondary'
    }`;

  const infoCardClass = 'rounded-[16px] border border-white/[0.05] bg-surface-1 p-4';

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="h-[500px] w-[800px] rounded-full bg-brand-primary/5 blur-[150px]" />
      </div>

      <div className="section-noise relative">
        <div className="mx-auto max-w-[1200px] px-4 pt-28 pb-16 md:pt-32 md:pb-24">
          {/* Contact Introduction */}
          <div ref={introRef}>
            <h1 className="text-4xl font-bold text-text-primary md:text-5xl">
              Have a product to build or a problem to solve?
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              Whether you&apos;re launching a new product, improving an existing platform or looking for technical leadership, I&apos;d be happy to discuss how I can help.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
                Worked With
              </span>
              {COMPANIES.map((company) => (
                <span
                  key={company}
                  className="rounded-full bg-surface-1 px-3 py-1 text-xs font-medium text-text-secondary"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Contact Info Cards */}
            <div ref={cardsRef} className="space-y-4">
              {/* Availability */}
              <div className={infoCardClass}>
                <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                  Availability
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
                  </span>
                  <span className="text-sm font-medium text-text-primary">
                    Available for Select Projects
                  </span>
                </div>
                <p className="mt-1 text-xs text-text-muted">
                  Currently accepting freelance projects, consulting engagements and selected senior engineering opportunities.
                </p>
              </div>

              {/* Response Time */}
              <div className={infoCardClass}>
                <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                  Response Time
                </p>
                <p className="mt-2 text-sm text-text-primary">
                  Usually within 24 hours
                </p>
              </div>

              {/* Location */}
              <div className={infoCardClass}>
                <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                  Location
                </p>
                <p className="mt-2 text-sm text-text-primary">
                  Mumbai, India
                </p>
              </div>

              {/* Preferred Engagements */}
              <div className={infoCardClass}>
                <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                  Preferred Engagements
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {['Freelance', 'Consulting', 'Contract', 'Technical Leadership'].map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-medium text-brand-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Methods */}
              <div className={infoCardClass}>
                <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                  Contact Methods
                </p>
                <div className="mt-2 space-y-2">
                  <a
                    href={`mailto:${SiteConfig.email}`}
                    className="block text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {SiteConfig.email}
                  </a>
                  <a
                    href={SiteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    Let&apos;s Connect
                  </a>
                  <a
                    href={SiteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    View Projects
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form Card */}
            <div id="contact-form" ref={formRef} className="rounded-[20px] border border-white/[0.05] bg-surface-1 p-6 md:p-8">
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

                {/* Inquiry Type */}
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-text-muted">
                    Inquiry Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {INQUIRY_TYPES.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setInquiryType(type === inquiryType ? '' : type)}
                        className={pillClass(inquiryType === type)}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-text-muted">
                    Budget <span className="font-normal normal-case tracking-normal text-text-muted">(optional)</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {BUDGET_RANGES.map((range) => (
                      <button
                        key={range}
                        type="button"
                        onClick={() => setBudgetRange(range === budgetRange ? '' : range)}
                        className={pillClass(budgetRange === range)}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
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
                <div
                  ref={successRef}
                  className="mt-4 rounded-[12px] bg-success/10 px-4 py-3 text-sm text-success"
                >
                  {successMessage}
                  <br />
                  <br />
                  I&apos;ve received your message and will typically respond within 24 hours.
                </div>
              )}

              {/* Error */}
              {unexpectedError && (
                <div className="mt-4 rounded-[12px] bg-error/10 px-4 py-3 text-sm text-error">
                  Something went wrong.
                  <br />
                  <br />
                  Please email me directly at{' '}
                  <a href={`mailto:${SiteConfig.email}`} className="underline">
                    {SiteConfig.email}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <section className="border-t border-white/[0.05] bg-bg-primary">
          <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24 text-center">
            <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
              Ready to discuss your project?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
              Whether you need help building a product, improving performance or solving a technical challenge, let&apos;s start a conversation.
            </p>
            <a
              href="#contact-form"
              className="mt-8 inline-flex h-[52px] items-center justify-center rounded-[12px] bg-cta-primary px-8 text-base font-medium text-white [text-shadow:0_1px_1px_rgba(0,0,0,0.35)] transition-all duration-200 hover:bg-cta-hover hover:scale-[1.02]"
            >
              Start a Conversation
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactForm;
