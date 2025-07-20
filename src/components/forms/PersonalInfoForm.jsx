const PersonalInfoForm = ({ data, onChange }) => {
  const handleChange = (field, value) => {
    onChange({
      ...data,
      [field]: value,
    })
  }

  const inputFields = [
    { key: "name", label: "Full Name", type: "text", placeholder: "John Doe", icon: "👤" },
    { key: "email", label: "Email Address", type: "email", placeholder: "john@example.com", icon: "📧" },
    { key: "phone", label: "Phone Number", type: "tel", placeholder: "+1 (555) 123-4567", icon: "📞" },
    { key: "address", label: "Address", type: "text", placeholder: "City, State, Country", icon: "📍" },
    {
      key: "linkedin",
      label: "LinkedIn Profile",
      type: "url",
      placeholder: "https://linkedin.com/in/johndoe",
      icon: "💼",
    },
    { key: "website", label: "Portfolio Website", type: "url", placeholder: "https://johndoe.com", icon: "🌐" },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {inputFields.map((field) => (
          <div key={field.key} className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
              <span>{field.icon}</span>
              {field.label}
            </label>
            <div className="relative">
              <input
                type={field.type}
                value={data[field.key] || ""}
                onChange={(e) => handleChange(field.key, e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                placeholder={field.placeholder}
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/0 to-blue-500/0 opacity-0 hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-700/50 rounded-lg border border-gray-600">
        <div className="flex items-start gap-3">
          <span className="text-cyan-400 text-lg">💡</span>
          <div>
            <h4 className="text-sm font-medium text-white mb-1">Pro Tips</h4>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Use a professional email address</li>
              <li>• Include your LinkedIn profile for better networking</li>
              <li>• Add your portfolio website if you have one</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfoForm
