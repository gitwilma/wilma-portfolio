import { NavBar } from "./components/layout/NavBar";
import { Intro } from "./sections/Intro";
import { SelectedWork } from "./sections/SelectedWork/SelectedWork";

function App() {
  return (
    <main id="main-content">
      <NavBar />
      <Intro />
      <SelectedWork />
    </main>
  );
}

export default App;
