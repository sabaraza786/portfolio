import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgressBar from "./components/ScrollProgressBar";
import BackToTop from "./components/BackToTop";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import useTheme from "./hooks/useTheme";

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      <CustomCursor />
      <ScrollProgressBar />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
