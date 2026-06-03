"use client";

import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import {
  useForm,
  type FieldError,
  type UseFormRegister,
} from "react-hook-form";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Flame,
  MapPin,
  Send,
  AlertCircle,
} from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import {
  businessHours,
  contactCards,
  whyItems,
  ROLE_OPTIONS,
} from "../_data/contactData";

// ─────────────────────────────────────────
// Types & shared field styles (ds tokens = dark mode)
// ─────────────────────────────────────────

type FormData = {
  name: string;
  email: string;
  role: string;
  subject: string;
  message: string;
};

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-ds-border bg-ds-card text-sm text-ds-text outline-none placeholder:text-ds-muted-foreground focus:border-ds-primary focus:ring-2 focus:ring-ds-ring/25";

const labelClass = "mb-1.5 block text-sm font-semibold text-ds-text";

// ─────────────────────────────────────────
// Field primitives (memoized)
// ─────────────────────────────────────────

const FieldErrorMessage = memo(function FieldErrorMessage({
  error,
}: {
  error?: FieldError;
}) {
  if (!error?.message) return null;
  return (
    <p className="mt-1.5 flex items-center gap-1 text-xs text-ds-destructive">
      <AlertCircle className="size-3 shrink-0" aria-hidden />
      {error.message}
    </p>
  );
});

type TextFieldProps = {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  register: UseFormRegister<FormData>;
  name: keyof FormData;
  rules: Parameters<UseFormRegister<FormData>>[1];
  error?: FieldError;
  multiline?: boolean;
  rows?: number;
};

const TextField = memo(function TextField({
  id,
  label,
  type = "text",
  placeholder,
  register,
  name,
  rules,
  error,
  multiline,
  rows = 5,
}: TextFieldProps) {
  const shared = {
    id,
    placeholder,
    className: multiline
      ? `${inputClass} resize-y leading-relaxed`
      : inputClass,
    "aria-invalid": error ? true : undefined,
    ...register(name, rules),
  };

  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {multiline ? (
        <textarea rows={rows} {...shared} />
      ) : (
        <input type={type} {...shared} />
      )}
      <FieldErrorMessage error={error} />
    </div>
  );
});

// ─────────────────────────────────────────
// Static sections (no client state)
// ─────────────────────────────────────────

const ContactInfoCards = memo(function ContactInfoCards() {
  return (
    <section className="mb-16 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {contactCards.map(({ icon: Icon, title, detail, sub }) => (
          <article
            key={title}
            className="ds-card flex flex-col items-center p-8 text-center"
          >
            <div className="ds-icon-box mb-4 size-14 rounded-full">
              <Icon className="size-6" aria-hidden />
            </div>
            <h3 className="mb-1 text-base font-semibold text-ds-text">
              {title}
            </h3>
            <p className="mb-1 text-sm font-medium text-ds-primary">{detail}</p>
            <p className="text-xs text-ds-muted-foreground">{sub}</p>
          </article>
        ))}
      </div>
    </section>
  );
});

const WhyReachOutPanel = memo(function WhyReachOutPanel() {
  return (
    <div className="rounded-2xl border border-ds-primary/20 bg-ds-primary/10 p-8">
      <h3 className="mb-5 text-xl font-bold text-ds-text">
        Why Reach Out to Us?
      </h3>
      <ul className="space-y-3">
        {whyItems.map((text) => (
          <li key={text} className="flex items-start gap-3">
            <span
              className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-ds-primary"
              aria-hidden
            >
              <CheckCircle className="size-3 text-ds-primary-foreground" />
            </span>
            <p className="text-sm text-ds-text">{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
});

const BusinessHoursPanel = memo(function BusinessHoursPanel() {
  return (
    <div className="ds-card p-8">
      <div className="mb-5 flex items-center gap-2">
        <Clock className="size-5 text-ds-primary" aria-hidden />
        <h3 className="text-lg font-bold text-ds-text">Business Hours</h3>
      </div>
      <div className="space-y-3">
        {businessHours.map((row, i) => (
          <div
            key={row.day}
            className={`flex items-center justify-between py-2.5 ${
              i < businessHours.length - 1 ? "border-b border-ds-border" : ""
            }`}
          >
            <span className="text-sm text-ds-muted-foreground">{row.day}</span>
            <span
              className={`text-sm font-semibold ${
                row.closed ? "text-ds-destructive" : "text-ds-primary"
              }`}
            >
              {row.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
});

const MapPanel = memo(function MapPanel() {
  return (
    <div className="flex min-h-[160px] flex-col items-center justify-center gap-3 rounded-2xl border border-ds-border bg-ds-input p-8 text-center">
      <MapPin className="size-10 text-ds-primary" aria-hidden />
      <p className="text-sm text-ds-muted-foreground">
        123 Fashion Street, New York, USA
      </p>
      <a
        href="https://maps.google.com"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1 text-sm font-semibold text-ds-primary hover:underline"
      >
        View on Google Maps <ArrowRight className="size-4" aria-hidden />
      </a>
    </div>
  );
});

const ContactSidePanels = memo(function ContactSidePanels() {
  return (
    <div className="flex flex-col gap-6">
      <WhyReachOutPanel />
      <BusinessHoursPanel />
      <MapPanel />
    </div>
  );
});

// ─────────────────────────────────────────
// Form (client state isolated here)
// ─────────────────────────────────────────

const ContactForm = memo(function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dismissTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ mode: "onBlur", reValidateMode: "onBlur" });

  useEffect(() => {
    return () => {
      if (dismissTimerRef.current) clearTimeout(dismissTimerRef.current);
    };
  }, []);

  const onSubmit = useCallback(
    async (data: FormData) => {
      setIsLoading(true);
      try {
        // TODO: replace with real API call
        console.log("Submitted:", data);
        reset();
        setIsSubmitted(true);
        if (dismissTimerRef.current) clearTimeout(dismissTimerRef.current);
        dismissTimerRef.current = setTimeout(() => setIsSubmitted(false), 5000);
      } finally {
        setIsLoading(false);
      }
    },
    [reset],
  );

  return (
    <div className="ds-card p-8 shadow-md md:p-10">
      <h2 className="mb-1 text-2xl font-bold text-ds-text">
        Send Us a Message
      </h2>
      <p className="mb-8 text-sm text-ds-muted-foreground">
        Fill in the form and we&apos;ll get back to you shortly.
      </p>

      {isSubmitted && (
        <div
          className="mb-6 flex items-center gap-3 rounded-xl border border-ds-primary bg-ds-primary/10 px-4 py-3"
          role="status"
        >
          <CheckCircle
            className="size-5 shrink-0 text-ds-primary"
            aria-hidden
          />
          <p className="text-sm font-medium text-ds-primary">
            Thank you! Your message has been sent successfully.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <TextField
            id="contact-name"
            label="Full Name"
            placeholder="John Smith"
            register={register}
            name="name"
            rules={{
              required: "Full name is required",
              minLength: { value: 2, message: "Minimum 2 characters" },
            }}
            error={errors.name}
          />
          <TextField
            id="contact-email"
            label="Email Address"
            type="email"
            placeholder="john@company.com"
            register={register}
            name="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            }}
            error={errors.email}
          />
        </div>

        <div>
          <label htmlFor="contact-role" className={labelClass}>
            I am a...
          </label>
          <select
            id="contact-role"
            className={inputClass}
            aria-invalid={errors.role ? true : undefined}
            {...register("role", { required: "Please select your role" })}
          >
            <option value="">Select your role</option>
            {ROLE_OPTIONS.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          <FieldErrorMessage error={errors.role} />
        </div>

        <TextField
          id="contact-subject"
          label="Subject"
          placeholder="How can we help?"
          register={register}
          name="subject"
          rules={{
            required: "Subject is required",
            minLength: { value: 5, message: "Minimum 5 characters" },
          }}
          error={errors.subject}
        />

        <TextField
          id="contact-message"
          label="Message"
          placeholder="Write your message here..."
          register={register}
          name="message"
          multiline
          rules={{
            required: "Message is required",
            minLength: { value: 20, message: "Minimum 20 characters" },
          }}
          error={errors.message}
        />

        <button
          type="submit"
          disabled={isLoading}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-ds-primary py-3.5 text-base font-semibold text-ds-primary-foreground disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? (
            <span>Sending...</span>
          ) : (
            <>
              <Send className="size-4" aria-hidden />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
});

// ─────────────────────────────────────────
// Page
// ─────────────────────────────────────────

const ContactUsPage = () => (
  <div className="mt-14">
    <div className="mb-14">
      <SectionTitle
        label="Get In Touch"
        icon={Flame}
        title="We are Here to "
        titleHighlight="Help"
        description="Whether you are a buyer, supplier, or just exploring — our team is ready to assist you every step of the way."
        animate={false}
      />
    </div>

    <ContactInfoCards />

    <section className="max-w-6xl mx-auto pb-14">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
        <ContactForm />
        <ContactSidePanels />
      </div>
    </section>
  </div>
);

export default ContactUsPage;
