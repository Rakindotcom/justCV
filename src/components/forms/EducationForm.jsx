"use client"

const EducationForm = ({ data, onChange }) => {
  const addEducation = () => {
    const newEducation = {
      id: Date.now(),
      institution: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      gpa: "",
      description: "",
    }
    onChange([...data, newEducation])
  }

  const updateEducation = (id, field, value) => {
    const updated = data.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu))
    onChange(updated)
  }

  const removeEducation = (id) => {
    onChange(data.filter((edu) => edu.id !== id))
  }

  return (
    <div className="space-y-6">
      {data.map((education, eduIndex) => (
        <div key={education.id} className="bg-gray-700/50 border border-gray-600 rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">{eduIndex + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Education</h3>
            </div>
            <button
              onClick={() => removeEducation(education.id)}
              className="text-red-400 hover:text-red-300 hover:bg-red-500/10 p-2 rounded-lg transition-all duration-300"
            >
              🗑️
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                <span>🏫</span>
                Institution
              </label>
              <input
                type="text"
                value={education.institution}
                onChange={(e) => updateEducation(education.id, "institution", e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                placeholder="University Name"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                <span>🎓</span>
                Degree
              </label>
              <input
                type="text"
                value={education.degree}
                onChange={(e) => updateEducation(education.id, "degree", e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                placeholder="Bachelor's, Master's, PhD, etc."
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                <span>📚</span>
                Field of Study
              </label>
              <input
                type="text"
                value={education.field}
                onChange={(e) => updateEducation(education.id, "field", e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                placeholder="Computer Science, Business, etc."
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                <span>📊</span>
                GPA (Optional)
              </label>
              <input
                type="text"
                value={education.gpa}
                onChange={(e) => updateEducation(education.id, "gpa", e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                placeholder="3.8/4.0"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                <span>📅</span>
                Start Date
              </label>
              <input
                type="month"
                value={education.startDate}
                onChange={(e) => updateEducation(education.id, "startDate", e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                <span>📅</span>
                End Date
              </label>
              <input
                type="month"
                value={education.endDate}
                onChange={(e) => updateEducation(education.id, "endDate", e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
              <span>📝</span>
              Description (Optional)
            </label>
            <textarea
              value={education.description}
              onChange={(e) => updateEducation(education.id, "description", e.target.value)}
              rows={3}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
              placeholder="Relevant coursework, honors, activities, thesis topic..."
            />
          </div>
        </div>
      ))}

      <button
        onClick={addEducation}
        className="w-full py-4 border-2 border-dashed border-gray-600 rounded-xl text-gray-400 hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-300 font-medium flex items-center justify-center gap-2"
      >
        <span>+</span>
        Add Education
      </button>
    </div>
  )
}

export default EducationForm
