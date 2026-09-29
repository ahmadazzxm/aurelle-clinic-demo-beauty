import Header from './components/Header';
import { Hero, Programs } from './components/Hero';
import Procedures from './components/Procedures';
import { Band, Director } from './components/Story';
import Results from './components/Results';
import Booking from './components/Booking';
import { Footer, Fab } from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Programs />
        <Procedures />
        <Band />
        <Director />
        <Results />
        <Booking />
      </main>
      <Footer />
      <Fab />
    </>
  );
}
