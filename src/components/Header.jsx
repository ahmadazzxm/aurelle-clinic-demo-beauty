import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import { nav } from '../data';

function Logo() {
  return (
    <a className="logo" href="#" aria-label="Aurelle Clinic, Beirut">
      <svg width="34" height="34" viewBox="0 0 36 36" aria-hidden="true">
        <path d="M6 34V18a12 12 0 0 1 24 0v16" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 34V19a6 6 0 0 1 12 0v15" fill="none" stroke="currentColor" strokeWidth="1.6" opacity=".55" />
        <circle cx="18" cy="7" r="1.8" fill="currentColor" />
      </svg>
      <span>Aurelle<small>Clinic · Beirut</small></span>
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const openBtn = useRef(null);
  const closeBtn = useRef(null);
  const first = useRef(true);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (first.current) { first.current = false; return; }
    (open ? closeBtn : openBtn).current.focus();
  }, [open]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <div className="menu" hidden={!open} id="menu" onClick={(e) => e.target.closest('a') && setOpen(false)}>
        <div className="menu__top">
          <button ref={closeBtn} className="icon" type="button" aria-label="Close menu" onClick={() => setOpen(false)}><Icon name="x" size={24} /></button>
        </div>
        <nav className="menu__nav" aria-label="Mobile">
          {nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
          <a href="#book" className="btn menu__cta">Book a consultation</a>
        </nav>
      </div>

      <header className="head">
        <button ref={openBtn} className="icon head__burger" type="button" aria-label="Menu" aria-controls="menu" aria-expanded={open} onClick={() => setOpen(true)}><Icon name="list" size={24} /></button>
        <Logo />
        <nav className="head__nav" aria-label="Primary">
          {nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <div className="head__end">
          <button className="icon" type="button" aria-label="Search"><Icon name="search" /></button>
          <a className="chip head__book" href="#book">Book a consultation</a>
          <a className="icon head__cal" href="#book" aria-label="Book a consultation"><Icon name="calendar" /></a>
        </div>
      </header>
    </>
  );
}
