import Header from './components/Header'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import ArtOfFragrance from './components/ArtOfFragrance'
import PackagingShowcase from './components/PackagingShowcase'
import CreateBrand from './components/CreateBrand'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#060606] text-[#f5f0e8] selection:bg-[#c9a96e]/30 selection:text-[#f5f0e8]">
      <Header />
      <main>
        <Hero />
        <Expertise />
        <ArtOfFragrance />
        <PackagingShowcase />
        <CreateBrand />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
