import { useRef, useState } from 'react';
import { procedures } from '../data';

export default function Procedures() {
  const [active, setActive] = useState(0);
  const tabs = useRef([]);

  function onKeyDown(e, i) {
    const next = { ArrowDown: i + 1, ArrowRight: i + 1, ArrowUp: i - 1, ArrowLeft: i - 1, Home: 0, End: procedures.length - 1 }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    const n = (next + procedures.length) % procedures.length;
    setActive(n);
    tabs.current[n].focus();
  }

  return (
    <section className="proc section" id="proc">
      <div className="wrap">
        <h2 className="h2 proc__title">Procedures</h2>
        <div className="proc__body">
          <div className="proc__tabs" role="tablist" aria-label="Procedures" aria-orientation="vertical">
            {procedures.map((p, i) => (
              <button
                key={p.key}
                ref={(el) => (tabs.current[i] = el)}
                role="tab"
                id={`t-${p.key}`}
                aria-selected={active === i}
                aria-controls={`p-${p.key}`}
                tabIndex={active === i ? 0 : -1}
                type="button"
                onClick={() => setActive(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
              >{p.label}</button>
            ))}
          </div>

          {procedures.map((p, i) => (
            <div key={p.key} className="proc__panel" id={`p-${p.key}`} role="tabpanel" aria-labelledby={`t-${p.key}`} hidden={active !== i}>
              <div className="proc__txt">
                <h3 className="h3">{p.title}</h3>
                <ul className="links">{p.items.map((it) => <li key={it}><a href="#">{it}</a></li>)}</ul>
                <a className="btn" href="#book">Book a consultation</a>
              </div>
              <figure className="arch proc__art">
                <div className="arch__frame"><img src={`/images/${p.image}`} alt={p.alt} style={{ objectPosition: p.pos }} /></div>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
