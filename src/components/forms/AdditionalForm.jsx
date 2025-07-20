const AdditionalForm = ({ certifications, languages, onCertificationsChange, onLanguagesChange }) => {
  const addCertification = () => {
    const newCert = {
      id: Date.now(),
      name: "",
      issuer: "",
      date: "",
      link: "",
    }
    onCertificationsChange([...certifications, newCert])
  }

  const updateCertification = (id, field, value) => {
    const updated = certifications.map((cert) => (cert.id === id ? { ...cert, [field]: value } : cert))
    onCertificationsChange(updated)
  }

  const removeCertification = (id) => {
    onCertificationsChange(certifications.filter((cert) => cert.id !== id))
  }

  const addLanguage = () => {
    const newLang = {
      id: Date.now(),
      name: "",
      proficiency: "Intermediate",
    }
    onLanguagesChange([...languages, newLang])
  }

  const updateLanguage = (id, field, value) => {
    const updated = languages.map((lang) => (lang.id === id ? { ...lang, [field]: value } : lang))
    onLanguagesChange(updated)
  }

  const removeLanguage = (id) => {
    onLanguagesChange(languages.filter((lang) => lang.id !== id))
  }

  return (
    <div className="space-y-8">
      {/* Certifications Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm">🏆</span>
          </div>
          <h3 className="text-lg font-semibold text-white">Certifications</h3>
        </div>

        {certifications.map((cert, certIndex) => (
          <div key={cert.id} className="bg-gray-700/50 border border-gray-600 rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-medium text-gray-300">Certification #{certIndex + 1}</h4>
              <button
                onClick={() => removeCertification(cert.id)}
                className="text-red-400 hover:text-red-300 hover:bg-red-500/10 p-2 rounded-lg transition-all duration-300"
              >
                🗑️
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <span>📜</span>
                  Certification Name
                </label>
                <input
                  type="text"
                  value={cert.name}
                  onChange={(e) => updateCertification(cert.id, "name", e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  placeholder="AWS Certified Developer"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <span>🏢</span>
                  Issuing Organization
                </label>
                <input
                  type="text"
                  value={cert.issuer}
                  onChange={(e) => updateCertification(cert.id, "issuer", e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  placeholder="Amazon Web Services"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <span>📅</span>
                  Date Obtained
                </label>
                <input
                  type="month"
                  value={cert.date}
                  onChange={(e) => updateCertification(cert.id, "date", e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <span>🔗</span>
                  Credential Link (Optional)
                </label>
                <input
                  type="url"
                  value={cert.link}
                  onChange={(e) => updateCertification(cert.id, "link", e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  placeholder="https://credential-link.com"
                />
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={addCertification}
          className="w-full py-3 border-2 border-dashed border-gray-600 rounded-xl text-gray-400 hover:border-yellow-500 hover:text-yellow-400 hover:bg-yellow-500/5 transition-all duration-300 font-medium flex items-center justify-center gap-2"
        >
          <span>+</span>
          Add Certification
        </button>
      </div>

      {/* Languages Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm">🌍</span>
          </div>
          <h3 className="text-lg font-semibold text-white">Languages</h3>
        </div>

        {languages.map((lang, langIndex) => (
          <div key={lang.id} className="bg-gray-700/50 border border-gray-600 rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-medium text-gray-300">Language #{langIndex + 1}</h4>
              <button
                onClick={() => removeLanguage(lang.id)}
                className="text-red-400 hover:text-red-300 hover:bg-red-500/10 p-2 rounded-lg transition-all duration-300"
              >
                🗑️
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <span>🗣️</span>
                  Language
                </label>
                <input
                  type="text"
                  value={lang.name}
                  onChange={(e) => updateLanguage(lang.id, "name", e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  placeholder="Spanish, French, Mandarin, etc."
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <span>📊</span>
                  Proficiency Level
                </label>
                <select
                  value={lang.proficiency}
                  onChange={(e) => updateLanguage(lang.id, "proficiency", e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Fluent">Fluent</option>
                  <option value="Native">Native</option>
                </select>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={addLanguage}
          className="w-full py-3 border-2 border-dashed border-gray-600 rounded-xl text-gray-400 hover:border-green-500 hover:text-green-400 hover:bg-green-500/5 transition-all duration-300 font-medium flex items-center justify-center gap-2"
        >
          <span>+</span>
          Add Language
        </button>
      </div>
    </div>
  )
}

export default AdditionalForm
