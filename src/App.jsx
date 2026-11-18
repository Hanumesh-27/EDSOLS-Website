
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import './App.css'
import Affiliations from './components/Affiliations'
import Mission from './components/Mission'
import WhyChooseUs from './sections/WhyChooseUs'
import RealTimeVisibility from './sections/RealTimeVisibility'
import TechStack from './sections/TechStack'
import FeaturedSuccess from './sections/FeaturedSuccess'
import FAQ from './sections/FAQ'
import CTA from './sections/CTA'
import Footer from './sections/Footer'
import Products from './sections/Products'
import Services from './sections/Services'
import FoundersProgram from './sections/FoundersProgram'
import ContactFormProvider from './components/ContactFormProvider'

function Home() {
  return (
    <main className="app-container">
      <Navbar />
      <Hero />
      <Affiliations />
      <Mission />
      <WhyChooseUs />
      <RealTimeVisibility />
      <TechStack />
      <FeaturedSuccess />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}


function App() {
  return (
    <ContactFormProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/founders-program" element={<FoundersProgram />} />
        <Route path="/founders" element={<FoundersProgram />} />
      </Routes>
    </ContactFormProvider>
  )
}

export default App
