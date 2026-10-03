import { useState } from 'react';
import Icon from './Icon';
import { programs } from '../data';

export function Hero() {
  return (
    <section className="hero wrap">
      <div className="hero__copy">
        <h1 className="display">
          <span className="line"><span style={{ '--i': 0 }}>Confidence,</span></span>
          <span className="line"><span className="hl" style={{ '--i': 1 }}>naturally.</span></span>
        </h1>
        <p className="lead hero__sub">Science-led aesthetics, dermatology and wellness in Beirut.</p>
        <div className="row hero__cta">
          <a className="btn" href="#book">Book a consultation</a>
          <a className="textlink" href="#proc">Discover procedures</a>
        </div>
      </div>

      <div className="hero__art">
        <figure className="arch">
          <div className="arch__frame">
            <img src="/images/hero.jpg" width="800" height="1000" alt="Portrait of a woman with calm, natural skin" style={{ objectPosition: 'center 25%' }} />
          </div>
        </figure>
        <p className="hero__cap"><span>Achrafieh, Beirut</span><span>Mon-Sat, 9:00-19:00</span></p>
      </div>
    </section>
  );
}

const previews = ['tab-face.jpg', 'tab-body.jpg', 'treatment-iv.jpg'];

export function Programs() {
  const [active, setActive] = useState(0);

  return (
    <section className="programs section section--tint" id="programs">
      <div className="wrap programs__grid">
        <div className="programs__intro">
          <h2 className="h2">Programs</h2>
          <p className="lead">Book one of our longer-term programs for a complete plan: skin, body and wellness treatments bundled together, planned by one doctor and priced as a package.</p>
        </div>

        <figure className="arch programs__art" aria-hidden="true">
          <div className="arch__frame">
            {previews.map((src, i) => (
              <img key={src} src={`/images/${src}`} alt="" loading="lazy" data-on={active === i} />
            ))}
          </div>
        </figure>

        <ul className="programs__list">
          {programs.map((p, i) => (
            <li key={p}>
              <a href="#" onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)}>
                <span>{p}</span><Icon name="arrow" size={28} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
