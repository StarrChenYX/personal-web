import { Navigate, Route, Routes } from "react-router-dom";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { HomePage } from "@/pages/HomePage";
import { MediaPage } from "@/pages/MediaPage";
import { RepertoirePage } from "@/pages/RepertoirePage";

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gallery-white text-gallery-charcoal antialiased">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/repertoire" element={<RepertoirePage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
