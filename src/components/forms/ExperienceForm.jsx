const ExperienceForm = ({ data, onChange }) => {
  const addExperience = () => {
    const newExperience = {
      id: Date.now(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
      achievements: [""],
    }
    onChange([...data, newExperience])
  }

  const updateExperience = (id, field, value) => {
    const updated = data.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp))
    onChange(updated)
  }

  const removeExperience = (id) => {
    onChange(data.filter((exp) => exp.id !== id))
  }

  const addAchievement = (expId) => {
    const updated = data.map((exp) => (exp.id === expId ? { ...exp, achievements: [...exp.achievements, ""] } : exp))
    onChange(updated)
  }

  const updateAchievement = (expId, index, value) => {
    const updated = data.map((exp) =>
      exp.id === expId
        ? {
            ...exp,
            achievements: exp.achievements.map((ach, i) => (i === index ? value : ach)),
          }
        : exp,
    )
    onChange(updated)
  }

  const removeAchievement = (expId, index) => {
    const updated = data.map((exp) =>
      exp.id === expId
        ? {
            ...exp,
            achievements: exp.achievements.filter((_, i) => i !== index),
          }
        : exp,
    )
    onChange(updated)
  }

  return (
    <div className="space-y-6">
      {data.map((experience, expIndex) => (
        <div key={experience.id} className="bg-gray-700/50 border border-gray-600 rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">{expIndex + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Work Experience</h3>
            </div>
            <button
              onClick={() => removeExperience(experience.id)}
              className="text-red-400 hover:text-red-300 hover:bg-red-500/10 p-2 rounded-lg transition-all duration-300"
            >
              🗑️
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                <span>🏢</span>
                Company Name
              </label>
              <input
                type="text"
                value={experience.company}
                onChange={(e) => updateExperience(experience.id, "company", e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                placeholder="Company Name"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                <span>💼</span>
                Job Title
              </label>
              <input
                type="text"
                value={experience.position}
                onChange={(e) => updateExperience(experience.id, "position", e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                placeholder="Job Title"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                <span>📅</span>
                Start Date
              </label>
              <input
                type="month"
                value={experience.startDate}
                onChange={(e) => updateExperience(experience.id, "startDate", e.target.value)}
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
                value={experience.endDate}
                onChange={(e) => updateExperience(experience.id, "endDate", e.target.value)}
                disabled={experience.current}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-800 disabled:text-gray-500"
              />
              <label className="flex items-center gap-2 mt-2">
                <input
                  type="checkbox"
                  checked={experience.current}
                  onChange={(e) => updateExperience(experience.id, "current", e.target.checked)}
                  className="w-4 h-4 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500"
                />
                <span className="text-sm text-gray-300">Currently working here</span>
              </label>
            </div>
          </div>

          <div className="mb-6 space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
              <span>📝</span>
              Job Description
            </label>
            <textarea
              value={experience.description}
              onChange={(e) => updateExperience(experience.id, "description", e.target.value)}
              rows={3}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
              placeholder="Brief description of your role and responsibilities..."
            />
          </div>

          <div className="space-y-4">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
              <span>🎯</span>
              Key Achievements
            </label>
            {experience.achievements.map((achievement, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={achievement}
                  onChange={(e) => updateAchievement(experience.id, index, e.target.value)}
                  className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  placeholder="• Achievement or key responsibility..."
                />
                <button
                  onClick={() => removeAchievement(experience.id, index)}
                  className="px-3 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-all duration-300"
                >
                  ×
                </button>
              </div>
            ))}
            <button
              onClick={() => addAchievement(experience.id)}
              className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-2 hover:bg-cyan-500/10 px-3 py-2 rounded-lg transition-all duration-300"
            >
              <span>+</span>
              Add Achievement
            </button>
          </div>
        </div>
      ))}

      <button
        onClick={addExperience}
        className="w-full py-4 border-2 border-dashed border-gray-600 rounded-xl text-gray-400 hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-300 font-medium flex items-center justify-center gap-2"
      >
        <span>+</span>
        Add Work Experience
      </button>
    </div>
  )
}

export default ExperienceForm
