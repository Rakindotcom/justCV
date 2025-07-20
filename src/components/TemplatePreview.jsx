import { Link } from "react-router-dom"

const TemplatePreview = () => {
  const templates = [
    {
      id: 1,
      name: "Modern Professional",
      description: "Clean white design with blue accents, perfect for corporate roles",
      image: "/placeholder.svg?height=400&width=300",
      gradient: "from-blue-500 to-indigo-600",
      features: ["Clean Layout", "ATS Friendly", "Professional"],
    },
    {
      id: 2,
      name: "Executive Sidebar",
      description: "Professional sidebar layout ideal for senior positions",
      image: "/placeholder.svg?height=400&width=300",
      gradient: "from-gray-600 to-gray-800",
      features: ["Sidebar Design", "Executive Style", "Print Ready"],
    },
    {
      id: 3,
      name: "Classic Elegant",
      description: "Traditional professional layout for all industries",
      image: "/placeholder.svg?height=400&width=300",
      gradient: "from-slate-500 to-slate-700",
      features: ["Classic Design", "Versatile", "Easy to Read"],
    },
  ]

  return (
    <section className="py-20 bg-gray-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Choose Your Dark Template</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional dark-themed designs that make you stand out from the crowd
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {templates.map((template) => (
            <div
              key={template.id}
              className="group bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Template Image */}
              <div className="relative overflow-hidden">
                <img
                  src={template.image || "/placeholder.svg"}
                  alt={template.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${template.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>
              </div>

              {/* Template Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{template.name}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{template.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {template.features.map((feature, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-medium">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Preview Button */}
                <button
                  className={`w-full py-3 bg-gradient-to-r ${template.gradient} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  Preview Template
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/builder"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            <span>🎨 Start Building Your CV</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TemplatePreview
