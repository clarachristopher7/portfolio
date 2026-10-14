import React from 'react';

// One diagram of the portfolio model: two views that score each product
// (sections and journey stages), and one layer of decisions that spans
// every product. Example data matches the portfolio map below it.
const H = 'have', P = 'partial', M = 'missing', N = 'na';

const PRODUCTS = [
  {name: 'Cloud service', sections: [H, H, H, H, P, H, N], journey: [H, H, H, P, M, H]},
  {name: 'Firewall appliance', sections: [P, H, H, P, M, H, H], journey: [P, H, H, H, P, M]},
  {name: 'Employee app', sections: [H, H, P, N, M, P, N], journey: [N, N, H, P, N, M]},
  {name: 'Partner portal', sections: [M, P, P, N, M, M, N], journey: [M, P, P, M, N, M]},
];

const ROWS = [
  {n: 1, key: 'sections', head: 'Sections', q: 'Where content lives'},
  {n: 2, key: 'journey', head: 'Journey', q: 'What the reader is doing'},
];

const Dots = ({items, line}) => (
  <span className={`iav-dots${line ? ' iav-dots--line' : ''}`}>
    {items.map((s, i) => <i key={i} className={`iav-dot iav-dot--${s}`} />)}
  </span>
);

export default function IaViews() {
  return (
    <figure className="iav" aria-label="The portfolio model has three views. Sections and Journey score each product. Decisions apply to every product.">
      <div className="iav-grid">
        <span className="iav-corner" />
        {PRODUCTS.map((p) => <span key={p.name} className="iav-prod">{p.name}</span>)}

        {ROWS.map((r) => (
          <React.Fragment key={r.key}>
            <span className="iav-label"><b><em>{r.n}</em>{r.head}</b><span>{r.q}</span></span>
            {PRODUCTS.map((p) => (
              <span key={p.name} className="iav-cell"><Dots items={p[r.key]} line={r.key === 'journey'} /></span>
            ))}
          </React.Fragment>
        ))}

        <span className="iav-label"><b><em>3</em>Decisions</b><span>What applies to every product</span></span>
        <span className="iav-span">
          <span>Page metadata</span><span>Translation</span><span>Retiring old versions</span><span>Navigation limits</span>
        </span>
      </div>
      <figcaption className="iav-key">
        <span><i className="iav-dot iav-dot--have" />Have</span>
        <span><i className="iav-dot iav-dot--partial" />Partial</span>
        <span><i className="iav-dot iav-dot--missing" />Missing</span>
        <span><i className="iav-dot iav-dot--na" />Not applicable</span>
        <span className="iav-key-note">Sections and Journey score each product. Decisions are made once, with one owner each, and apply to every product.</span>
      </figcaption>
    </figure>
  );
}
