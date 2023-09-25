import Join from '@/components/LandingPage/Join';
import LandingHowItWorks from '@/components/LandingPage/HowItWorks';
import LandingCTAOne from '@/components/LandingPage/CTAOne';
import LandingHowItHelps from '@/components/LandingPage/HowItHelps';
import LandingHeroOne from '@/components/LandingPage/HeroOne';
import Customers from '@/components/LandingPage/Customers';
import Stats from '@/components/LandingPage/Stats';

function App() {
  return (
    <div>
      <section className='dark:bg-gray-900' >
        <LandingHeroOne />
        <Join />
        <Customers />
        <LandingHowItWorks />
        <LandingCTAOne />
        <Stats />
        <LandingHowItHelps />
      </section>
    </div>
  );
}

export default App;
