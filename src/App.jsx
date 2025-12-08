import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import HomeNew from './pages/HomeNew'
import About from './pages/About.jsx'
import AboutNew from './pages/AboutNew.jsx'
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Solutions from "./pages/Solutions.jsx";
import SolutionsNew from "./pages/SolutionsNew.jsx";
import CybeBlog from "./pages/Cybeblog.jsx";
import CybeblogNew from "./pages/CybeblogNew.jsx";
import BlogContent from "./pages/BlogContent.jsx";
import "./i18n";
import {LanguageProvider} from "./pages/LanguageProvider.jsx";
import CareerGrowth from "./pages/CareerGrowth.jsx";
import CareerGrowthNew from "./pages/CareerGrowthNew.jsx";
import Contact from "./pages/Contact.jsx";
import ContactNew from "./pages/ContactNew.jsx";
import Solution from "./pages/Solution.jsx";
import JobApplicationForm from "./pages/JobApplicationForm.jsx";

function App() {
    return (
        <LanguageProvider>
            <Navbar/>
            <main>
                <Routes>
                    {/* Optional redirect from / to /home-new */}
                    <Route path="/" element={<Navigate to="/home-new" replace />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/home-new" element={<HomeNew />} />
                    <Route path="/solutions" element={<Solutions />} />
                    <Route path="/solutions-new" element={<SolutionsNew />} />
                    <Route path="/solution" element={<Solution />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/about-new" element={<AboutNew />} />
                    <Route path="/career" element={<CareerGrowth />} />
                    <Route path="/career-new" element={<CareerGrowthNew />} />
                    <Route path="/blogs" element={<CybeBlog />} />
                    <Route path="/blogs-new" element={<CybeblogNew />} />
                    <Route path="/blog" element={<BlogContent />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/contact-new" element={<ContactNew />} />
                    <Route path="/apply/:id" element={<JobApplicationForm />} />
                </Routes>
            </main>
            <Footer/>
        </LanguageProvider>
    )
}

export default App
