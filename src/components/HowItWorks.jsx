const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Fill Your Information",
      description:
        "Enter your personal details, work experience, education, and skills in our intuitive dark-themed form.",

      gradient: "from-cyan-500 to-blue-500",
    },
    {
      number: "02",
      title: "Preview & Customize",
      description: "Watch your CV come to life with our professional dark templates. Switch between designs instantly.",

      gradient: "from-blue-500 to-purple-500",
    },
    {
      number: "03",
      title: "Download & Apply",
      description: "Export your CV as a high-quality PDF and start applying for your dream job immediately.",
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section className="py-20 bg-gray-800 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How It Works</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Create your professional CV in just 3 simple steps with our streamlined process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 text-center hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                {/* Step Number */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${step.gradient} text-white font-bold text-xl mb-6`}
                >
                  {step.number}
                </div>



                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>


            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
