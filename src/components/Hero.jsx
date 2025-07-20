import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            JustCV
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-4 text-gray-300">
            Create Professional CVs That Get You Hired
          </p>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-400 leading-relaxed">
            Build stunning, ATS-friendly resumes in minutes with our powerful CV builder. Choose from beautiful
            dark-themed templates, customize your content, and download as PDF instantly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/builder"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              <span className="relative z-10">🚀 Start Building Free</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Link>

            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-sm">✨ No signup required</span>
              <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
              <span className="text-sm">💾 Auto-save locally</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  )
}

export default Hero
