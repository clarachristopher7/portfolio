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
            Documentation lead with 9 years of experience creating narrative-driven
            technical content for cloud infrastructure and cybersecurity platforms —
            and building the AI-powered automation that keeps it accurate as products
            change.
          </p>
          <div>
            <Link className="button button--primary button--lg" to="/work/intro">
              See the work
            </Link>
            {' '}
            <Link className="button button--secondary button--lg" to="/blog">
              Read the blog
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
}
