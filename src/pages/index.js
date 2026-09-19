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
            Documentation Lead with 9 years of experience creating narrative-driven
            technical content. Recent experience developing user journey-focused content
            strategy for a complex cloud infrastructure and cybersecurity platform.
            Established history of partnering with cross-functional teams to help
            smoothly transition users from discovery and evaluation to their first
            deployment. A self-starter in using the latest AI technologies (Claude Code)
            to build the right scaffolding around documentation lifecycles at enterprise
            scale.
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
