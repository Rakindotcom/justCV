import Hero from "../components/Hero"
import HowItWorks from "../components/HowItWorks"
import TemplatePreview from "../components/TemplatePreview"
import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <HowItWorks />
      <TemplatePreview />
      <Footer />
    </div>
  )
}

export default HomePage
