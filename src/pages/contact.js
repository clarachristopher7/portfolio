import React, {useState} from 'react';
import Layout from '@theme/Layout';
import styles from './contact.module.css';

// Paste your form endpoint here (e.g. a Formspree URL like
// https://formspree.io/f/abcdwxyz). Until it is set, the form tells the
// visitor to email instead rather than silently dropping their message.
const FORM_ENDPOINT = '';

const EMAIL = 'clara.christopher56@gmail.com';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(event) {
    event.preventDefault();
    if (!FORM_ENDPOINT) {
      setStatus('unconfigured');
      return;
    }
    setStatus('sending');
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {Accept: 'application/json'},
        body: new FormData(event.target),
      });
      setStatus(response.ok ? 'sent' : 'error');
      if (response.ok) {
        event.target.reset();
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <Layout title="Contact" description="Send Clara Christopher a message">
      <div className="container">
        <div className={styles.page}>
          <h1 className={styles.title}>Get in touch</h1>
          <p className={styles.intro}>
            Send a message and I'll get back to you. You can also email me directly at{' '}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.field}>
              <span className={styles.label}>Name</span>
              <input className={styles.input} type="text" name="name" required />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Email</span>
              <input className={styles.input} type="email" name="email" required />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Message</span>
              <textarea className={styles.textarea} name="message" rows={7} required />
            </label>

            <button className={styles.submit} type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'sent' && (
              <p className={styles.ok}>Thanks — your message is on its way.</p>
            )}
            {status === 'error' && (
              <p className={styles.problem}>
                Something went wrong. Please email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> instead.
              </p>
            )}
            {status === 'unconfigured' && (
              <p className={styles.problem}>
                This form isn't connected to a mail service yet. Please email{' '}
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a> directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </Layout>
  );
}
