import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Clara Christopher"
      description="Content architect for cloud security products, technical writing, content design, and documentation architecture">
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
              <h2>Docs</h2>
              <p>Live pages I write and maintain on the SonicWall Cloud Secure Edge docs site.</p>
            </div>
            <div className={styles.summaryItem}>
              <h2>Content architecture</h2>
              <p>A Cloud Secure Edge IA restructure, and an estate-wide model for evaluating doc sets in a single-pane view.</p>
            </div>
            <div className={styles.summaryItem}>
              <h2>Content design</h2>
              <p>In-product strings, their structuring, and their sequencing.</p>
            </div>
            <div className={styles.summaryItem}>
              <h2>Automations</h2>
              <p>AI-assisted analysis and tooling that keeps docs current and robust.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
