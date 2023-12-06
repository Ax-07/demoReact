import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Logement } from "./pages/Logement.jsx";
import { Error_404 } from "./pages/Error_404.jsx";
import { About } from "./pages/About.jsx";
import { Header } from "./layouts/Header.jsx";
import { Footer } from "./layouts/Footer.jsx";
import { LogementsProvider } from "./contexts/logementsContext.jsx";

export function App() {
  return (
    <LogementsProvider>
      <div className="main">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Logement/:id" element={<Logement />} />
          <Route path="*" element={<Error_404 />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </LogementsProvider>
  );
}
