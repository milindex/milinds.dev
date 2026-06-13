'use client';

import { addDoc, collection } from 'firebase/firestore';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDebounce } from 'use-debounce';
import Validator from 'validatorjs';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { database } from '@/utils/firebase';
import { SiteConfig } from '@/constants';
import MagneticButton from '@/components/animations/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const dbInstance = collection(database, 'contact-us');

const INQUIRY_TYPES = ['Freelance Project', 'Technical Consulting', 'Performance Audit', 'Full-Time Opportunity', 'Other'] as const;

const BUDGET_RANGES = ['Under \u20B950K', '\u20B950K\u2013\u20B92L', '\u20B92L\u2013\u20B95L', '\u20B95L+', 'Not Sure Yet'] as const;

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
  const [turnstileToken, setTurnstileToken] = useState('');

  const turnstileRef = useRef<HTMLDivElement>(null);

  const introRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const [debouncedSenderName] = useDebounce(senderName, 50);
  const [debouncedSenderEmail] = useDebounce(senderEmail, 50);
  const [debouncedSenderMessage] = useDebounce(senderMessage, 50);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(introRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' });

    if (cardsRef.current) {
      tl.fromTo(cardsRef.current.children, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out' }, '-=0.2');
    }

    if (formRef.current) {
      tl.fromTo(formRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.3');
    }

    return () => { tl.kill(); };
  }, []);

  useEffect(() => {
    if (successMessage && successRef.current) {
      gsap.from(successRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 0.4,
        ease: 'power3.out',
      });
    }
  }, [successMessage]);

  // Load Turnstile
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (turnstileRef.current && window.turnstile) {
        window.turnstile.render(turnstileRef.current, {
          sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA',
          callback: (token: string) => setTurnstileToken(token),
        });
      }
    };
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  const validate = useCallback(() => {
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
  }, [debouncedSenderName, debouncedSenderEmail, debouncedSenderMessage]);

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
        // Send email notification
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: debouncedSenderName,
            email: debouncedSenderEmail,
            inquiryType,
            budget: budgetRange,
            message: debouncedSenderMessage,
            turnstileToken,
          }),
        });

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
        : 'border-white/[0.05] focus:border-brand-primary/50 focus:shadow-[0_0_12px_rgba(253,87,53,0.08)]'
    }`;

  const pillClass = (isSelected: boolean) =>
    `cursor-pointer rounded-full border px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
      isSelected
        ? 'border-brand-primary bg-brand-primary/10 text-brand-primary'
        : 'border-white/[0.05] text-text-muted hover:border-white/20 hover:text-text-secondary'
    }`;

  return (
    <div className="relative overflow-hidden">
      {/* Layered background blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-brand-primary/[0.04] blur-[120px]" />
        <div className="absolute -right-32 top-3/4 h-[400px] w-[400px] rounded-full bg-accent/[0.03] blur-[100px]" />
      </div>

      <div className="section-noise relative">
        <div className="mx-auto max-w-[1200px] px-4 pt-28 pb-16 md:pt-32 md:pb-24">
          {/* Contact Introduction */}
          <div ref={introRef} className="max-w-3xl relative z-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-primary">
              Get in Touch
            </p>
            <h1 className="mt-3 text-4xl font-bold text-text-primary md:text-5xl lg:text-6xl">
              Have a product to build<br />or a problem to solve?
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary max-w-2xl">
              Whether you&apos;re launching a new product, improving an existing platform or looking for technical leadership, I&apos;d be happy to discuss how I can help.
            </p>
          </div>

          {/* Two Column Layout — form first on mobile */}
          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Form Card (first on mobile, right on desktop) */}
            <div id="contact-form" ref={formRef} className="lg:order-2 rounded-[20px] bg-surface-1 p-6 shadow-lg md:p-8">
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-text-muted">Name</label>
                  <input
                    value={senderName}
                    className={fieldClass(!!formErrors?.Name)}
                    type="text"
                    placeholder="Your name"
                    onChange={(e) => setSenderName(e.target.value)}
                    onBlur={validate}
                  />
                  {formErrors?.Name && <p className="mt-1 text-xs text-error">{formErrors.Name[0]}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-text-muted">Email</label>
                  <input
                    value={senderEmail}
                    className={fieldClass(!!formErrors?.Email)}
                    type="email"
                    placeholder="your@email.com"
                    onChange={(e) => setSenderEmail(e.target.value)}
                    onBlur={validate}
                  />
                  {formErrors?.Email && <p className="mt-1 text-xs text-error">{formErrors.Email[0]}</p>}
                </div>

                {/* Inquiry Type */}
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-text-muted">Inquiry Type</label>
                  <div className="flex flex-wrap gap-2">
                    {INQUIRY_TYPES.map((type) => (
                      <button key={type} type="button" onClick={() => setInquiryType(type === inquiryType ? '' : type)} className={pillClass(inquiryType === type)}>
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
                      <button key={range} type="button" onClick={() => setBudgetRange(range === budgetRange ? '' : range)} className={pillClass(budgetRange === range)}>
                        {range}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-text-muted">Message</label>
                  <textarea
                    value={senderMessage}
                    className={`${fieldClass(!!formErrors?.Message)} min-h-[120px] resize-y`}
                    placeholder="Tell me about your project"
                    onChange={(e) => setSenderMessage(e.target.value)}
                    onBlur={validate}
                  />
                  {formErrors?.Message && <p className="mt-1 text-xs text-error">{formErrors.Message[0]}</p>}
                </div>
              </div>

              {/* Turnstile */}
              <div ref={turnstileRef} className="mt-6 flex justify-center" />

              {/* Submit */}
              <div className="mt-4">
                <MagneticButton
                  as="button"
                  onClick={saveMessage}
                  disabled={isSubmitting}
                  className="inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-[12px] bg-cta-primary px-8 text-base font-medium text-white [text-shadow:0_1px_1px_rgba(0,0,0,0.35)] transition-all duration-200 hover:bg-cta-hover active:scale-[0.98] disabled:opacity-60"
                >
                  {isSubmitting && (
                    <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </MagneticButton>
              </div>

              {/* Success */}
              {successMessage && (
                <div ref={successRef} className="mt-4 rounded-[12px] bg-success/10 px-4 py-3 text-sm text-success">
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="mt-0.5 shrink-0"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    <div>
                      <p className="font-medium">Thanks for reaching out.</p>
                      <p className="mt-1">I&apos;ve received your message and will typically respond within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Error */}
              {unexpectedError && (
                <div className="mt-4 rounded-[12px] bg-error/10 px-4 py-3 text-sm text-error">
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="mt-0.5 shrink-0"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                    <div>
                      <p className="font-medium">Something went wrong.</p>
                      <p>Please email me directly at{' '}<a href={`mailto:${SiteConfig.email}`} className="underline">{SiteConfig.email}</a></p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Left: Contact Info Cards (second on mobile, left on desktop) */}
            <div ref={cardsRef} className="lg:order-1 space-y-4">
              {/* Availability */}
              <div className="group rounded-[16px] border border-white/[0.05] bg-surface-1 p-5 transition-all duration-300 hover:border-brand-primary/20 hover:shadow-[0_0_20px_rgba(253,87,53,0.06)]">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-success/10">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wider text-text-muted">Availability</p>
                    <p className="mt-1 text-sm font-medium text-text-primary">Available for Select Projects</p>
                    <p className="mt-1 text-xs text-text-muted">Currently accepting freelance projects, consulting engagements and selected senior engineering opportunities.</p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="group rounded-[16px] border border-white/[0.05] bg-surface-1 p-5 transition-all duration-300 hover:border-brand-primary/20 hover:shadow-[0_0_20px_rgba(253,87,53,0.06)]">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FD5735" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-text-muted">Response Time</p>
                    <p className="mt-1 text-sm text-text-primary">Usually within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="group rounded-[16px] border border-white/[0.05] bg-surface-1 p-5 transition-all duration-300 hover:border-brand-primary/20 hover:shadow-[0_0_20px_rgba(253,87,53,0.06)]">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FD5735" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-text-muted">Location</p>
                    <p className="mt-1 text-sm text-text-primary">Mumbai, India</p>
                  </div>
                </div>
              </div>

              {/* Preferred Engagements */}
              <div className="group rounded-[16px] border border-white/[0.05] bg-surface-1 p-5 transition-all duration-300 hover:border-brand-primary/20 hover:shadow-[0_0_20px_rgba(253,87,53,0.06)]">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FD5735" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wider text-text-muted">Preferred Engagements</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {['Freelance', 'Consulting', 'Contract', 'Technical Leadership'].map((item) => (
                        <span key={item} className="rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-medium text-brand-primary">{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="group rounded-[16px] border border-white/[0.05] bg-surface-1 p-5 transition-all duration-300 hover:border-brand-primary/20 hover:shadow-[0_0_20px_rgba(253,87,53,0.06)]">
                <p className="text-xs font-medium uppercase tracking-wider text-text-muted">Contact Methods</p>
                <div className="mt-3 space-y-2">
                  <a href={`mailto:${SiteConfig.email}`} className="flex items-center gap-3 rounded-[12px] bg-surface-2 px-3 py-2.5 text-sm text-text-secondary transition-all duration-200 hover:bg-surface-3 hover:text-text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FD5735" viewBox="0 0 24 24" className="shrink-0"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                    <span className="truncate">{SiteConfig.email}</span>
                  </a>
                  <a href={SiteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-[12px] bg-surface-2 px-3 py-2.5 text-sm text-text-secondary transition-all duration-200 hover:bg-surface-3 hover:text-text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FD5735" viewBox="0 0 24 24" className="shrink-0"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    <span>Let&apos;s Connect</span>
                  </a>
                  <a href={SiteConfig.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-[12px] bg-surface-2 px-3 py-2.5 text-sm text-text-secondary transition-all duration-200 hover:bg-surface-3 hover:text-text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FD5735" viewBox="0 0 24 24" className="shrink-0"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    <span>View Projects</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer CTA */}
        <section className="border-t border-white/[0.05] bg-bg-primary">
          <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24 text-center">
            <h2 className="text-3xl font-bold text-text-primary md:text-4xl">Ready to discuss your project?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">Whether you need help building a product, improving performance or solving a technical challenge, let&apos;s start a conversation.</p>
            <a href="#contact-form" className="mt-8 inline-flex h-[52px] items-center justify-center rounded-[12px] bg-cta-primary px-8 text-base font-medium text-white [text-shadow:0_1px_1px_rgba(0,0,0,0.35)] transition-all duration-200 hover:bg-cta-hover hover:scale-[1.02]">
              Start a Conversation
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactForm;
