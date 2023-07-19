import Home from "./pages/Home/Home";
import "./app.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <section className="app">
      <Header />
      <Home />
      <Footer />
    </section>
  );
}

export default App;
