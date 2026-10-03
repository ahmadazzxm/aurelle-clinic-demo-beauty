import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import { results } from '../data';

const clamp = (v) => Math.max(0, Math.min(100, v));

function BeforeAfter({ slug, label, index }) {
  const [pos, setPos] = useState(50);
  const el = useRef(null);
  const touched = useRef(false);

  // One small nudge the first time the slider scrolls into view, to show it can be dragged.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    let timer = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      timer = setTimeout(() => {
        const dur = 1500;
        let start;
        const tick = (t) => {
          if (touched.current) return;
          start ??= t;
          const p = Math.min((t - start) / dur, 1);
          setPos(50 - 13 * Math.sin(Math.PI * p));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      }, 350 + index * 220);
    }, { threshold: 0.6 });
    io.observe(el.current);
    return () => { io.disconnect(); clearTimeout(timer); cancelAnimationFrame(raf); };
  }, [index]);

  function fromPointer(e) {
    const r = e.currentTarget.getBoundingClientRect();
    setPos(clamp(((e.clientX - r.left) / r.width) * 100));
  }

  function onKeyDown(e) {
    const next = { ArrowLeft: pos - 5, ArrowRight: pos + 5, Home: 0, End: 100 }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    touched.current = true;
    setPos(clamp(next));
  }

  return (
    <div
      ref={el}
      className="ba"
      role="slider"
      tabIndex={0}
      aria-label={`Before and after: ${label}`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      style={{ '--pos': `${pos}%` }}
      onPointerDown={(e) => { touched.current = true; e.currentTarget.setPointerCapture(e.pointerId); fromPointer(e); }}
      onPointerMove={(e) => e.currentTarget.hasPointerCapture(e.pointerId) && fromPointer(e)}
      onKeyDown={onKeyDown}
    >
      <img src={`/images/before-after-${slug}-before.jpg`} alt="Before" draggable="false" loading="lazy" />
      <img className="ba__after" src={`/images/before-after-${slug}-after.jpg`} alt="After" draggable="false" loading="lazy" />
      <span className="ba__label ba__label--l">Before</span>
      <span className="ba__label ba__label--r">After</span>
      <div className="ba__handle" />
      <div className="ba__knob"><Icon name="swap" size={20} /></div>
    </div>
  );
}

export default function Results() {
  return (
    <section className="results section section--tint" id="results">
      <div className="wrap">
        <div className="sechead"><h2 className="h2">Results</h2><a className="textlink" href="#">View gallery</a></div>
        <div className="results__grid">
          {results.map((r, i) => (
            <figure key={r.slug}>
              <BeforeAfter slug={r.slug} label={r.label} index={i} />
              <figcaption><span>{r.caption}</span><span>Results vary</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
