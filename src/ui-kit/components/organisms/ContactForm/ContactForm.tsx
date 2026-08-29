"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { CONTACT_EMAIL } from "@/config/social-links";
import "./ContactForm.css";

const SUBJECTS = [
  "Rejoindre l'association",
  "Devenir partenaire",
  "Presse",
  "Autre",
];

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(SUBJECTS[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
        <h2 className="contact-form__title">Message envoyé</h2>
        <p className="contact-form__status contact-form__status--success">
          Merci, votre message a bien été transmis à l'équipe Yeeso. Nous
          revenons vers vous rapidement.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form framed-four-corners" onSubmit={handleSubmit}>
      <h2 className="contact-form__title">Nous écrire</h2>

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
        <label htmlFor="contact-name">Nom et prénom</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          placeholder="Amina Diallo"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-email">E-mail</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          placeholder="vous@exemple.fr"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
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
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Décrivez votre demande en quelques lignes."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
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
