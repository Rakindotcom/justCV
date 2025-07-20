import { useState } from "react"

const SkillsForm = ({ data, onChange }) => {
  const [newSkill, setNewSkill] = useState("")

  const addSkill = () => {
    if (newSkill.trim() && !data.includes(newSkill.trim())) {
      onChange([...data, newSkill.trim()])
      setNewSkill("")
    }
  }

  const removeSkill = (skillToRemove) => {
    onChange(data.filter((skill) => skill !== skillToRemove))
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addSkill()
    }
  }

  const skillCategories = [
    { name: "Programming", skills: ["JavaScript", "Python", "Java", "C++", "React", "Node.js"] },
    { name: "Design", skills: ["Photoshop", "Figma", "Illustrator", "Sketch", "InDesign"] },
    { name: "Marketing", skills: ["SEO", "Google Analytics", "Social Media", "Content Marketing"] },
    { name: "Languages", skills: ["Spanish", "French", "German", "Mandarin", "Japanese"] },
  ]

  const addPresetSkill = (skill) => {
    if (!data.includes(skill)) {
      onChange([...data, skill])
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
            <span>⚡</span>
            Add Skills
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              placeholder="e.g., JavaScript, Project Management, Adobe Photoshop"
            />
            <button
              onClick={addSkill}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-medium"
            >
              Add
            </button>
          </div>
        </div>

        {/* Quick Add Skills */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-gray-300">Quick Add Popular Skills</h4>
          {skillCategories.map((category) => (
            <div key={category.name} className="space-y-2">
              <h5 className="text-xs font-medium text-gray-400 uppercase tracking-wide">{category.name}</h5>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => addPresetSkill(skill)}
                    disabled={data.includes(skill)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                      data.includes(skill)
                        ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                        : "bg-gray-700 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 border border-gray-600 hover:border-cyan-500"
                    }`}
                  >
                    {data.includes(skill) ? "✓ " : "+ "}
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {data.length > 0 && (
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
            <span>🎯</span>
            Your Skills ({data.length})
          </label>
          <div className="flex flex-wrap gap-2">
            {data.map((skill, index) => (
              <span
                key={index}
                className="group inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300"
              >
                {skill}
                <button
                  onClick={() => removeSkill(skill)}
                  className="ml-2 text-cyan-400 hover:text-red-400 transition-colors duration-300"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
        <div className="flex items-start gap-3">
          <span className="text-cyan-400 text-lg">💡</span>
          <div>
            <h4 className="text-sm font-medium text-white mb-2">Skills Tips</h4>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Include both technical and soft skills</li>
              <li>• Use keywords from job descriptions you're targeting</li>
              <li>• Be specific (e.g., "React.js" instead of just "JavaScript")</li>
              <li>• List skills you're genuinely proficient in</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsForm
