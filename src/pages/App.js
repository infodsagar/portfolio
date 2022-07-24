import { Navbar } from './navbar';
import { Home } from './home';
import { About } from './about';
import { Skills } from './skills';
import { Projects } from './projects';
import { Contact } from './contact';
import { Star } from '../componant/star';
import { Loading } from '../componant/loading';
import { useEffect, useState } from 'react';

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <div
          className='text-white text-lg'
          style={{
            background:
              'radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%)',
          }}
        >
          <Navbar />
          <Star />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      )}
    </>
  );
}
export default App;
