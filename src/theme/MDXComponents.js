import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';

// Every Markdown image links to its full-size file, so readers on a
// phone can tap a screenshot to zoom in.
function ZoomImg(props) {
  return (
    <a className="img-zoom" href={props.src} target="_blank" rel="noopener" title="Open full size">
      <MDXComponents.img {...props} />
    </a>
  );
}

export default {...MDXComponents, img: ZoomImg};
