"use client";

import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { CONTACT_EMAIL } from "@/config/social-links";
import "./ContactForm.css";

const SUBJECTS = [
  "Rejoindre l'association",
  "Devenir partenaire",
  "Presse",
  "Autre",
];

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SubmitStatus = "idle" | "submitting" | "success" | "error";
type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const validate = (values: {
  name: string;
  email: string;
  message: string;
}): FieldErrors => {
  const errors: FieldErrors = {};

  if (!values.name.trim()) {
    errors.name = "Indiquez votre nom et prénom.";
  }

  if (!values.email.trim()) {
    errors.email = "Indiquez votre adresse e-mail.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email =
      "Ajoutez un « @ » et un domaine, par exemple vous@exemple.fr.";
  }

  if (!values.message.trim()) {
    errors.message = "Décrivez votre demande avant d'envoyer le message.";
  }

  return errors;
};

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(SUBJECTS[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const successTitleRef = useRef<HTMLHeadingElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (status === "success") {
      successTitleRef.current?.focus();
    }
  }, [status]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validate({ name, email, message });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstInvalidRef = validationErrors.name
        ? nameRef
        : validationErrors.email
          ? emailRef
          : messageRef;
      firstInvalidRef.current?.focus();
      return;
    }
    setErrors({});

    if (!WEB3FORMS_ACCESS_KEY) {
      console.error(
        "NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is not set — contact form cannot submit.",
      );
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `[Contact Yeeso] ${subject}`,
          from_name: name,
          email,
          message,
        }),
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setSubject(SUBJECTS[0]);
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Contact form submission failed", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="contact-form framed-four-corners" role="status">
        <h2 className="contact-form__title" ref={successTitleRef} tabIndex={-1}>
          Message envoyé
        </h2>
        <p className="contact-form__status contact-form__status--success">
          Merci, votre message a bien été transmis à l'équipe Yeeso. Nous
          revenons vers vous rapidement.
        </p>
      </div>
    );
  }

  return (
    <form
      className="contact-form framed-four-corners"
      onSubmit={handleSubmit}
      noValidate
    >
      <h2 className="contact-form__title">Nous écrire</h2>
      <p className="contact-form__required-note">
        Les champs marqués d'un <span aria-hidden="true">*</span> sont
        obligatoires.
      </p>

      {status === "error" && (
        <p
          className="contact-form__status contact-form__status--error"
          role="alert"
        >
          L'envoi a échoué. Réessayez, ou écrivez-nous directement à{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      )}

      <div className="contact-form__field">
        <label htmlFor="contact-name">
          Nom et prénom <span aria-hidden="true">*</span>
        </label>
        <input
          id="contact-name"
          ref={nameRef}
          name="name"
          type="text"
          required
          autoComplete="name"
          value={name}
          aria-invalid={errors.name ? "true" : undefined}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          onChange={(event) => {
            setName(event.target.value);
            if (errors.name) {
              setErrors((prev) => ({ ...prev, name: undefined }));
            }
          }}
        />
        {errors.name && (
          <p
            id="contact-name-error"
            className="contact-form__error"
            role="alert"
          >
            {errors.name}
          </p>
        )}
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-email">
          E-mail <span aria-hidden="true">*</span>
        </label>
        <p id="contact-email-hint" className="contact-form__hint">
          Format attendu : vous@exemple.fr
        </p>
        <input
          id="contact-email"
          ref={emailRef}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="vous@exemple.fr"
          value={email}
          aria-invalid={errors.email ? "true" : undefined}
          aria-describedby={
            errors.email
              ? "contact-email-hint contact-email-error"
              : "contact-email-hint"
          }
          onChange={(event) => {
            setEmail(event.target.value);
            if (errors.email) {
              setErrors((prev) => ({ ...prev, email: undefined }));
            }
          }}
        />
        {errors.email && (
          <p
            id="contact-email-error"
            className="contact-form__error"
            role="alert"
          >
            {errors.email}
          </p>
        )}
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-subject">Sujet</label>
        <select
          id="contact-subject"
          name="subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        >
          {SUBJECTS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-message">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          ref={messageRef}
          name="message"
          required
          rows={5}
          placeholder="Décrivez votre demande en quelques lignes."
          value={message}
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={
            errors.message ? "contact-message-error" : undefined
          }
          onChange={(event) => {
            setMessage(event.target.value);
            if (errors.message) {
              setErrors((prev) => ({ ...prev, message: undefined }));
            }
          }}
        />
        {errors.message && (
          <p
            id="contact-message-error"
            className="contact-form__error"
            role="alert"
          >
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="contact-form__submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Envoi en cours…" : "Envoyer le message"}
      </button>
    </form>
  );
};
