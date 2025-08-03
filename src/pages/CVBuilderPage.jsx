import { useState, useEffect } from "react"
import CVForm from "../components/CVForm"
import CVPreview from "../components/CVPreview"
import TemplateSwitcher from "../components/TemplateSwitcher"
import { loadCVData, saveCVData } from "../utils/localStorage"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"

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
  const [showClearConfirm, setShowClearConfirm] = useState(false)

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
    setShowClearConfirm(true)
  }

  const confirmClear = () => {
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
    setShowClearConfirm(false)
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <Link
              to="/"
              className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              JustCV
            </Link>
            <div className="hidden sm:block h-6 w-px bg-gray-600"></div>
            <h1 className="text-xl font-semibold text-white text-center sm:text-left">
              CV Builder
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full md:w-auto">
            <div className="flex justify-center sm:justify-end">
              <TemplateSwitcher
                selectedTemplate={selectedTemplate}
                onTemplateChange={setSelectedTemplate}
              />
            </div>

            <div className="flex flex-wrap justify-center sm:justify-end gap-2">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium whitespace-nowrap"
              >
                💾 Save
              </button>
              <button
                onClick={handleClear}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium whitespace-nowrap"
              >
                🗑️ Clear
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="h-[90vh] mx-4 py-6 flex-grow max-w-full">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 h-full w-full">
          <div className="bg-gray-800 rounded-xl shadow-2xl border border-gray-700 overflow-y-auto h-full w-full">
            <CVForm cvData={cvData} onDataChange={handleDataChange} />
          </div>
          <div className="bg-gray-800 rounded-xl shadow-2xl border border-gray-700 overflow-y-auto h-full w-full">
            <CVPreview cvData={cvData} template={selectedTemplate} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Clean Floating Confirmation Popup */}
      {showClearConfirm && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-4 w-72 border border-gray-300">
            <h2 className="font-semibold text-base mb-2">
              Clear all CV data?
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              This action will delete all saved data.
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={confirmClear}
                className="px-3 py-1.5 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition"
              >
                Yes, clear
              </button>
              <button
                onClick={() => setShowClearConfirm(false)}
                className="px-3 py-1.5 bg-gray-200 text-gray-800 text-sm rounded hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CVBuilderPage
