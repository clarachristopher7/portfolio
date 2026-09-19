import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Clara — Technical Writer"
      description="Technical writing portfolio: zero trust, cloud security, and docs engineering">
      <header className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>Clara Christopher</h1>
          <p className={styles.heroSubtitle}>
            Content architect for cloud security products. I design how the product UI
            and docs are written, structured, and published, considering everything from
            the user journey to how the docs pipeline is built.
          </p>
          <p className={styles.heroSubtitle}>
            At SonicWall I own the Cloud Secure Edge content end to end. I work with
            designers and front-end engineers to build in-product experiences, and
            I&rsquo;m currently rearchitecting SonicWall&rsquo;s hardware and cloud
            product publishing flow.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primary} to="/work/intro">
              See the work
            </Link>
            <Link className={styles.secondary} to="/blog">
              Read the blog
            </Link>
          </div>

        </div>
      </header>

      <section className={styles.summarySection}>
        <div className="container">
          <div className={styles.summary}>
            <div className={styles.summaryItem}>
              <h2>Published docs</h2>
              <p>Live architecture, integration and concepts pages I write and maintain.</p>
            </div>
            <div className={styles.summaryItem}>
              <h2>Automations</h2>
              <p>CI automation that catches drift between what shipped and what's documented.</p>
            </div>
            <div className={styles.summaryItem}>
              <h2>Information architecture</h2>
              <p>Restructuring a docs estate around reader tasks, measured rather than asserted.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
