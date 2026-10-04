import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

// Card grid modelled on the Cloud Secure Edge docs homepage: hairline
// dividers instead of separate boxes, a tinted icon chip, a small tag,
// a dark title, and an action link pinned to the bottom of the card.

const ICONS = {
  compass: <><circle cx="12" cy="12" r="10" /><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36z" /></>,
  layers: <><path d="m12 2 10 5-10 5L2 7z" /><path d="m2 17 10 5 10-5" /><path d="m2 12 10 5 10-5" /></>,
  pen: <><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z" /></>,
  bot: <><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M12 8V4" /><path d="M9 14h.01" /><path d="M15 14h.01" /></>,
  file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M8 13h8" /><path d="M8 17h5" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  route: <><circle cx="6" cy="19" r="3" /><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" /><circle cx="18" cy="5" r="3" /></>,
  grid: <><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /></>,
  shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></>,
  globe: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20" /></>,
  plug: <><path d="M12 22v-5" /><path d="M9 8V2" /><path d="M15 8V2" /><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8z" /></>,
  gauge: <><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
  git: <><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="12" r="3" /><path d="M6 9v6" /><path d="M9 6h3a6 6 0 0 1 6 6" /></>,
  clock: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5z" /><path d="M6.5 17A2.5 2.5 0 0 0 4 19.5 2.5 2.5 0 0 0 6.5 22H20v-5" /></>,
};

export function Icon({name, size = 20}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name] || ICONS.file}
    </svg>
  );
}

const Arrow = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

export function HubGroup({label, columns = 3, children}) {
  return (
    <section className="hub-group">
      {label && <p className="hub-group-label">{label}</p>}
      <div className={`hub-grid hub-grid--${columns}`}>{children}</div>
    </section>
  );
}

export function HubCard({to, icon, tag, title, img, imgAlt = '', go, children}) {
  const src = useBaseUrl(img || '');
  const Tag = to ? Link : 'div';
  const linkProps = to ? {to} : {};
  return (
    <Tag className={`hub-card${img ? ' hub-card--img' : ''}${to ? '' : ' hub-card--static'}`} {...linkProps}>
      {img ? (
        <span className="hub-thumb"><img src={src} alt={imgAlt} loading="lazy" /></span>
      ) : null}
      <span className="hub-card-top">
        {icon && <span className="hub-ico"><Icon name={icon} /></span>}
        {tag && <span className="hub-tag">{tag}</span>}
      </span>
      <h3>{title}</h3>
      {children && <p>{children}</p>}
      {go && <span className="go">{go} <Arrow /></span>}
    </Tag>
  );
}
