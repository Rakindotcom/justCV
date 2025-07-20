"use client"

const ProjectsForm = ({ data, onChange }) => {
  const addProject = () => {
    const newProject = {
      id: Date.now(),
      title: "",
      link: "",
      description: "",
      technologies: [],
    }
    onChange([...data, newProject])
  }

  const updateProject = (id, field, value) => {
    const updated = data.map((project) => (project.id === id ? { ...project, [field]: value } : project))
    onChange(updated)
  }

  const removeProject = (id) => {
    onChange(data.filter((project) => project.id !== id))
  }

  return (
    <div className="space-y-6">
      {data.map((project, projectIndex) => (
        <div key={project.id} className="bg-gray-700/50 border border-gray-600 rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">{projectIndex + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Project</h3>
            </div>
            <button
              onClick={() => removeProject(project.id)}
              className="text-red-400 hover:text-red-300 hover:bg-red-500/10 p-2 rounded-lg transition-all duration-300"
            >
              🗑️
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                <span>🚀</span>
                Project Title
              </label>
              <input
                type="text"
                value={project.title}
                onChange={(e) => updateProject(project.id, "title", e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                placeholder="Project Name"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                <span>🔗</span>
                Project Link (Optional)
              </label>
              <input
                type="url"
                value={project.link}
                onChange={(e) => updateProject(project.id, "link", e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                placeholder="https://github.com/username/project"
              />
            </div>
          </div>

          <div className="mb-6 space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
              <span>📝</span>
              Description
            </label>
            <textarea
              value={project.description}
              onChange={(e) => updateProject(project.id, "description", e.target.value)}
              rows={4}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
              placeholder="Describe what the project does, your role, key features, and achievements..."
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
              <span>⚙️</span>
              Technologies Used
            </label>
            <input
              type="text"
              value={project.technologies.join(", ")}
              onChange={(e) =>
                updateProject(
                  project.id,
                  "technologies",
                  e.target.value
                    .split(",")
                    .map((tech) => tech.trim())
                    .filter((tech) => tech),
                )
              }
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              placeholder="React, Node.js, MongoDB, etc. (comma-separated)"
            />
            {project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-600 text-gray-300 rounded text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}

      <button
        onClick={addProject}
        className="w-full py-4 border-2 border-dashed border-gray-600 rounded-xl text-gray-400 hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-300 font-medium flex items-center justify-center gap-2"
      >
        <span>+</span>
        Add Project
      </button>
    </div>
  )
}

export default ProjectsForm
