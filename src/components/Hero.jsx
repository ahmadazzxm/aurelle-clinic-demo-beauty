import Icon from './Icon';
import { programs } from '../data';

export function Hero() {
  return (
    <section className="hero wrap">
      <div className="hero__copy">
        <p className="eyebrow rise" style={{ '--d': '0ms' }}>Aesthetic surgery, dermatology and wellness</p>
        <h1 className="display rise" style={{ '--d': '90ms' }}>Confidence,<br /><span className="hl">naturally.</span></h1>
        <div className="row rise" style={{ '--d': '200ms' }}>
          <a className="btn" href="#book">Book a consultation</a>
          <a className="textlink" href="#proc">Discover procedures</a>
        </div>
      </div>
      <figure className="arch hero__art rise-art">
        <div className="arch__frame"><img src="/images/hero.jpg" alt="Portrait of a woman with calm, natural skin" style={{ objectPosition: 'center 25%' }} /></div>
      </figure>
    </section>
  );
}

export function Programs() {
  return (
    <section className="programs section section--tint" id="programs">
      <div className="wrap split">
        <div className="programs__intro">
          <h2 className="h2">Programs</h2>
          <p className="lead">Book one of our longer-term programs for a complete plan: skin, body and wellness treatments bundled together, planned by one doctor and priced as a package.</p>
        </div>
        <ul className="programs__list">
          {programs.map((p) => (
            <li key={p}><a href="#"><span>{p}</span><Icon name="arrow" size={28} /></a></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
