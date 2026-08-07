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

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(SUBJECTS[0]);
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = `Nom : ${name}\nE-mail : ${email}\n\n${message}`;
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <form className="contact-form framed-four-corners" onSubmit={handleSubmit}>
      <h2 className="contact-form__title">Nous écrire</h2>

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

      <button type="submit" className="contact-form__submit">
        Envoyer le message
      </button>
    </form>
  );
};
