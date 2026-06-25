// Renders text with /word/ segments wrapped in <em class="accent">
// Supports newlines via \n
import React from 'react';

export default function AccentText({ text, as: Tag = 'span', className = '' }) {
  if (!text) return null;

  // Split on /…/ groups while keeping the marker
  const parts = text.split(/(\/[^/]+\/)/g).filter(Boolean);

  // Process each part: if matches /word/, render as accent; else render with line breaks
  const rendered = parts.map((part, i) => {
    const accentMatch = part.match(/^\/(.+)\/$/);
    if (accentMatch) {
      return (
        <em className="accent" key={i}>
          {accentMatch[1]}
        </em>
      );
    }
    // Handle newlines
    const lines = part.split('\n');
    return lines.map((line, j) => (
      <React.Fragment key={`${i}-${j}`}>
        {j > 0 && <br />}
        {line}
      </React.Fragment>
    ));
  });

  return <Tag className={className}>{rendered}</Tag>;
}
