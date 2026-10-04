import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import WorkCards from '@site/src/components/WorkCards';
import {HubGroup, HubCard} from '@site/src/components/Hub';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Clara Christopher"
      description="Content architect for cloud security products, technical writing, content design, and documentation architecture">
      <main className={styles.hub}>
        <h1 className={styles.title}>Clara Christopher</h1>
        <p className="hub-sub">
          Content architect for cloud security products. I design how the product UI and
          docs are written, structured, and published, from the user journey to the docs
          pipeline.
        </p>
        <div className="hub-actions">
          <Link className="btn-hub" to="/work/intro">See the work</Link>
          <Link className="btn-hub-alt" to="/work/resume">Resume</Link>
          <Link className="btn-hub-alt" to="/blog">Blog</Link>
        </div>

        <WorkCards set="contentDesign" label="Content design" />
        <WorkCards set="architecture" label="Content architecture" />
        <WorkCards set="docs" label="Live docs I maintain" />
        <HubGroup label="Automations and writing">
          <HubCard to="/work/docs-engineering/pr-evaluator-case-study" icon="git" tag="CI job"
            title="PR-to-docs impact evaluator" go="See how it works">
            Compares recent merges against the docs and lists the pages that look out of date.
          </HubCard>
          <HubCard to="/work/docs-engineering/staleness-auditor-case-study" icon="clock" tag="Audit"
            title="Staleness auditor" go="See how it works">
            Checks the whole site against the current console and returns a ranked backlog.
          </HubCard>
          <HubCard to="/blog/future-of-technical-writing-generative-ai" icon="book" tag="Essay"
            title="Technical writing and generative AI" go="Read the post">
            What the Chinese Room thought experiment says about writing docs with AI.
          </HubCard>
        </HubGroup>
      </main>
    </Layout>
  );
}
