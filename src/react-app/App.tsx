import { BrowserRouter as Router, Routes, Route } from "react-router";
import Layout from "@/react-app/components/Layout";
import HomePage from "@/react-app/pages/Home";
import AboutPage from "@/react-app/pages/About";
import WorkPage from "@/react-app/pages/Work";
import TeamPage from "@/react-app/pages/Team";
import DonatePage from "@/react-app/pages/Donate";
import VolunteerPage from "@/react-app/pages/Volunteer";
import ContactPage from "@/react-app/pages/Contact";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
