import { stats, team } from '../data';

export function Band() {
  return (
    <section className="band">
      <img src="/images/band-clinic-interior.jpg" alt="" />
      <div className="band__in wrap">
        <blockquote className="band__quote">“The best result is the one nobody can point to.”</blockquote>
        <div className="band__stats">
          {stats.map(([value, label]) => <div key={label}><b>{value}</b><span>{label}</span></div>)}
        </div>
      </div>
    </section>
  );
}

export function Director() {
  return (
    <section className="doc section">
      <div className="wrap split split--flip">
        <figure className="arch doc__art">
          <div className="arch__frame"><img src="/images/dr-karim-aoun.jpg" alt="Portrait of Dr. Karim Aoun" style={{ objectPosition: 'center 20%' }} /></div>
        </figure>
        <div className="doc__txt">
          <p className="eyebrow">Dr. Karim Aoun</p>
          <h2 className="h2">Meet our medical director</h2>
          <p>Dr. Karim Aoun has practised aesthetic and reconstructive surgery for over twenty years, in Beirut, Paris and the Gulf. His approach is conservative and precise: fewer, better-chosen procedures that look like you on a good day.</p>
          <p>He founded Aurelle to bring surgeons, dermatologists and wellness doctors under one roof: one plan, one team, one point of contact.</p>
          <a className="textlink" href="#book">Book a consultation</a>
          <div className="team">
            {team.map((d) => (
              <a key={d.name} className="mini" href="#">
                <span className="mini__img"><img src={`/images/${d.image}`} alt={`Portrait of ${d.name}`} style={{ objectPosition: 'center 20%' }} /></span>
                <span><b>{d.name}</b><small>{d.role}</small></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
