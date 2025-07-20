"use client"

const TemplateSwitcher = ({ selectedTemplate, onTemplateChange }) => {
  const templates = [
    {
      id: "template1",
      name: "Modern Professional",
      description: "Clean white design with blue accents",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      id: "template2",
      name: "Executive Sidebar",
      description: "Professional sidebar layout",
      gradient: "from-gray-600 to-gray-800",
    },
  ]

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-300 mb-2">Template Style</label>
      <select
        value={selectedTemplate}
        onChange={(e) => onTemplateChange(e.target.value)}
        className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 font-medium"
      >
        {templates.map((template) => (
          <option key={template.id} value={template.id}>
            {template.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default TemplateSwitcher
