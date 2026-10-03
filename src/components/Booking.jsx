import { useState } from 'react';
import Icon from './Icon';
import { booking } from '../data';

function Pressable({ pressed, disabled, className, onClick, children }) {
  return (
    <button type="button" className={className} aria-pressed={pressed} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

function Select({ id, label, options }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <div className="select">
        <select className="input" id={id}>{options.map((o) => <option key={o}>{o}</option>)}</select>
        <Icon name="caret" size={16} />
      </div>
    </div>
  );
}

export default function Booking() {
  const [mode, setMode] = useState(0);
  const [day, setDay] = useState(1);
  const [slot, setSlot] = useState(2);
  const [name, setName] = useState('Maya Sleiman');
  const [phone, setPhone] = useState('+961 3 472 915');

  const [dayName, dayNum] = booking.days[day];
  const confirm = `Confirm booking - ${dayName} ${dayNum}, ${booking.slots[slot][0]}`;

  return (
    <section className="booking section" id="book-section">
      <div className="wrap split">
        <div className="booking__txt">
          <h2 className="h2">Book your consultation</h2>
          <p className="lead">Every journey starts with a one-to-one consultation. In clinic in Achrafieh, or online from anywhere.</p>
          <dl className="info">
            <div><dt>Address</dt><dd>Charles Malek Avenue, Aurelle Building, 3rd floor, Achrafieh, Beirut</dd></div>
            <div><dt>Hours</dt><dd>Mon-Sat, 9:00-19:00</dd></div>
            <div><dt>Phone</dt><dd className="tnum">+961 1 384 720</dd></div>
          </dl>
        </div>

        <div className="book" id="book">
          <h3 className="h3 book__h">Choose a time</h3>
          <div className="book__note">
            <Icon name="calendar" size={20} />
            <span><b>Booking placeholder.</b> Connect the clinic's booking system here (custom calendar, Calendly, Fresha). Days, slots and doctors below are sample data.</span>
          </div>

          <div className="seg" style={{ '--i': mode }}>
            <span className="seg__thumb" aria-hidden="true" />
            {['In clinic', 'Online'].map((m, i) => (
              <Pressable key={m} pressed={mode === i} onClick={() => setMode(i)}>{m}</Pressable>
            ))}
          </div>

          <div className="two">
            <Select id="f-treat" label="Treatment" options={booking.treatments} />
            <Select id="f-doc" label="Doctor" options={booking.doctors} />
          </div>

          <div className="days">
            {booking.days.map(([d, n], i) => (
              <Pressable key={n} className="day" pressed={day === i} onClick={() => setDay(i)}>{d}<b>{n}</b></Pressable>
            ))}
          </div>

          <div className="slots">
            {booking.slots.map(([t, disabled], i) => (
              <Pressable key={t} className="slot" pressed={slot === i} disabled={disabled} onClick={() => setSlot(i)}>{t}</Pressable>
            ))}
          </div>

          <div className="two">
            <div className="field"><label htmlFor="f-name">Full name</label>
              <input className="input" id="f-name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></div>
            <div className="field"><label htmlFor="f-phone">Phone (WhatsApp)</label>
              <input className="input tnum" id="f-phone" value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="tel" autoComplete="tel" /></div>
          </div>

          <a className="btn btn--block" href="#book" onClick={(e) => e.preventDefault()}>
            <span key={confirm} className="btn__text">{confirm}</span>
          </a>
          <p className="book__help">Free cancellation up to 24h before. Confirmation via WhatsApp.</p>
        </div>
      </div>
    </section>
  );
}
