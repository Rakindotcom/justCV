import Hero from "../components/Hero"
import HowItWorks from "../components/HowItWorks"
import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <HowItWorks />
      <Footer />
    </div>
  )
}

export default HomePage
