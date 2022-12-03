import { Head } from "./assets/components/Head";
import { Projects } from "./assets/components/Projects";
import { About } from "./assets/components/About";
import { Footer } from "./assets/components/Footer";
import { Navbar } from "./assets/components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Head />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
