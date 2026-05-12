import { Footer } from "./components/layout/Footer";
import { NavBar } from "./components/layout/NavBar";
import { Intro } from "./sections/Intro";
import { SelectedWork } from "./sections/SelectedWork/SelectedWork";
import { SkillSet } from "./sections/SkillSet/SkillSet";

function App() {
  return (
    <main id="main-content">
      <NavBar />
      <Intro />
      <SelectedWork />
      <SkillSet />
      <Footer />
    </main>
  );
}

export default App;
