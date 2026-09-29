import Icon from './Icon';

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__news split">
          <h2 className="h3">Skin tips and seasonal offers, once a month.</h2>
          <form className="news" onSubmit={(e) => e.preventDefault()}>
            <input className="input" placeholder="Your email" aria-label="Your email" />
            <button className="btn" type="button">Join</button>
          </form>
        </div>
        <div className="foot__cols">
          <div>
            <h4>A journey of health, wellness and beauty</h4>
            <p>At Aurelle we believe in more than cosmetic services: a lasting patient-doctor relationship built on medical excellence and natural results.</p>
          </div>
          <div>
            <h4>Main menu</h4>
            <a href="#">Our story</a><a href="#proc">Procedures</a><a href="#programs">Programs</a><a href="#results">Results</a><a href="#book">Book a consultation</a>
          </div>
          <div>
            <h4>Follow</h4>
            <a href="#">Instagram</a><a href="#">Facebook</a><a href="#">TikTok</a>
          </div>
        </div>
        <p className="foot__copy">© Aurelle Clinic. Demo site, fictional clinic. Photos: Unsplash.</p>
      </div>
    </footer>
  );
}

export function Fab() {
  return (
    <a className="fab" href="#" aria-label="Chat on WhatsApp"><Icon name="whatsapp" /><span>WhatsApp</span></a>
  );
}
