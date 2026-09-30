import { useState } from 'react';
import { results } from '../data';

function BeforeAfter({ slug, label }) {
  const [pos, setPos] = useState(50);
  const clamp = (v) => Math.max(0, Math.min(100, v));

  function fromPointer(e) {
    const r = e.currentTarget.getBoundingClientRect();
    setPos(clamp(((e.clientX - r.left) / r.width) * 100));
  }

  function onKeyDown(e) {
    const next = { ArrowLeft: pos - 5, ArrowRight: pos + 5, Home: 0, End: 100 }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    setPos(clamp(next));
  }

  return (
    <div
      className="ba"
      role="slider"
      tabIndex={0}
      aria-label={`Before and after: ${label}`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      style={{ '--pos': `${pos}%` }}
      onPointerDown={(e) => { e.currentTarget.setPointerCapture(e.pointerId); fromPointer(e); }}
      onPointerMove={(e) => e.currentTarget.hasPointerCapture(e.pointerId) && fromPointer(e)}
      onKeyDown={onKeyDown}
    >
      <img src={`/images/before-after-${slug}-before.jpg`} alt="Before" draggable="false" />
      <img className="ba__after" src={`/images/before-after-${slug}-after.jpg`} alt="After" draggable="false" />
      <span className="ba__label ba__label--l">Before</span>
      <span className="ba__label ba__label--r">After</span>
      <div className="ba__handle" />
      <div className="ba__knob">‹ ›</div>
    </div>
  );
}

export default function Results() {
  return (
    <section className="results section section--tint" id="results">
      <div className="wrap">
        <div className="sechead"><h2 className="h2">Results</h2><a className="textlink" href="#">View gallery</a></div>
        <div className="results__grid">
          {results.map((r) => (
            <figure key={r.slug}>
              <BeforeAfter slug={r.slug} label={r.label} />
              <figcaption><span>{r.caption}</span><span>Results vary</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
