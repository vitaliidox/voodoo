import { Footer } from "./Blocks/Footer/Footer";
import { Header } from "./Blocks/Header/Header";
import { Main } from "./Blocks/Main";

function App() {
  return (
    <section className="flex min-h-[100vh] flex-col">
      <Header />

      <Main />

      <Footer />
    </section>
  );
}

export default App;
