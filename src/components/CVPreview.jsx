import Template1 from "../templates/Template1"
import Template2 from "../templates/Template2"
import { generatePDF } from "../utils/pdfGenerator"
import { toast } from "react-toastify"

const CVPreview = ({ cvData, template }) => {

  const handlePrint = () => {
    // Ensure the page is fully loaded before printing
    setTimeout(() => {
      window.print()
    }, 100)
  }

  const renderTemplate = () => {
    switch (template) {
      case "template1":
        return <Template1 data={cvData} />
      case "template2":
        return <Template2 data={cvData} />
      default:
        return <Template1 data={cvData} />
    }
  }

  return (
    <div className="bg-blue-950 text-white min-h-screen">
      {/* Custom Scrollbar Styles */}
      <style>{`
        #cv-preview {
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: #22c55e #1f2937;
        }
        #cv-preview::-webkit-scrollbar {
          width: 8px;
        }
        #cv-preview::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 8px;
        }
        #cv-preview::-webkit-scrollbar-thumb {
          background-color: #22c55e;
          border-radius: 8px;
          border: 2px solid #1f2937;
        }
      `}</style>

      <div className="h-full px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">CV Preview</h2>
            <p className="text-gray-400">Live preview of your CV</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 font-medium border border-gray-600"
            >
              <span>🖨️</span>
              Print/Save
            </button>
          </div>
        </div>

        <div
          id="cv-preview"
          className="bg-white rounded-xl shadow-2xl overflow-y-auto border border-gray-600 w-full mx-auto mb-10"
          style={{ minHeight: "800px" }}
        >
          <div className="template-transition">{renderTemplate()}</div>
        </div>
      </div>
    </div>
  )
}

export default CVPreview
