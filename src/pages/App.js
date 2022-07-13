import { Navbar } from './navbar';
import { Home } from './home';
import { About } from './about';
import { Skills } from './skills';
import { Projects } from './projects';
import { Contact } from './contact';

function App() {
  return (
    <>
      <div
        className='text-white text-lg'
        style={{
          background:
            'radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%)',
        }}
      >
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
export default App;
