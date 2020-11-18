import TopHeader from "./components/TopHeader";
import Header from "./components/Header";

import image from "./assets/img.jpg";
import "./App.css";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Us from "./components/Us";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Header />
      <Hero />
      <Services />
      <Us />
      <Contact />
    </div>
  );
}

export default App;
