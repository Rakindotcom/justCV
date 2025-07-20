import { useState, useEffect } from "react"
import CVForm from "../components/CVForm"
import CVPreview from "../components/CVPreview"
import TemplateSwitcher from "../components/TemplateSwitcher"
import { loadCVData, saveCVData } from "../utils/localStorage"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"

const CVBuilderPage = () => {
  const [cvData, setCvData] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      address: "",
      linkedin: "",
      website: "",
    },
    summary: "",
    education: [],
    experience: [],
    skills: [],
    projects: [],
    certifications: [],
    languages: [],
  })

  const [selectedTemplate, setSelectedTemplate] = useState("template1")

  useEffect(() => {
    const savedData = loadCVData()
    if (savedData) {
      setCvData(savedData)
      toast.success("Previous CV data loaded!")
    }
  }, [])

  const handleDataChange = (section, data) => {
    setCvData((prev) => ({
      ...prev,
      [section]: data,
    }))
  }

  const handleSave = () => {
    saveCVData(cvData)
    toast.success("CV data saved successfully!")
  }

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear all data?")) {
      setCvData({
        personalInfo: {
          name: "",
          email: "",
          phone: "",
          address: "",
          linkedin: "",
          website: "",
        },
        summary: "",
        education: [],
        experience: [],
        skills: [],
        projects: [],
        certifications: [],
        languages: [],
      })
      localStorage.removeItem("cvData")
      toast.success("CV data cleared!")
    }
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
                JustCV
              </Link>
              <div className="h-6 w-px bg-gray-600"></div>
              <h1 className="text-xl font-semibold text-white">CV Builder</h1>
            </div>
            <div className="flex items-center gap-3">
              <TemplateSwitcher selectedTemplate={selectedTemplate} onTemplateChange={setSelectedTemplate} />
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
              >
                💾 Save
              </button>
              <button
                onClick={handleClear}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                🗑️ Clear
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Form Panel */}
          <div className="bg-gray-800 rounded-xl shadow-2xl border border-gray-700">
            <CVForm cvData={cvData} onDataChange={handleDataChange} />
          </div>

          {/* Preview Panel */}
          <div className="bg-gray-800 rounded-xl shadow-2xl border border-gray-700">
            <CVPreview cvData={cvData} template={selectedTemplate} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CVBuilderPage
