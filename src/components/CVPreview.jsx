"use client"

import Template1 from "../templates/Template1"
import Template2 from "../templates/Template2"
import { generatePDF } from "../utils/pdfGenerator"
import { toast } from "react-toastify"

const CVPreview = ({ cvData, template }) => {
  const handleDownloadPDF = async () => {
    try {
      toast.info("🔄 Generating PDF... Please wait", {
        style: { background: "#1f2937", color: "#ffffff" },
      })
      await generatePDF(cvData, template)
      toast.success("✅ PDF downloaded successfully!", {
        style: { background: "#1f2937", color: "#ffffff" },
      })
    } catch (error) {
      toast.error("❌ Failed to generate PDF. Please try again.", {
        style: { background: "#1f2937", color: "#ffffff" },
      })
      console.error("PDF generation error:", error)
    }
  }

  const handlePrint = () => {
    window.print()
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
    <div className="h-full p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">CV Preview</h2>
          <p className="text-gray-400">Live preview of your CV</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 font-medium border border-gray-600"
          >
            <span>🖨️</span>
            Print
          </button>
          <button
            onClick={handleDownloadPDF}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 font-medium shadow-lg hover:shadow-emerald-500/25"
          >
            <span>📄</span>
            Download PDF
          </button>
        </div>
      </div>

      <div
        id="cv-preview"
        className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-600"
        style={{ minHeight: "800px" }}
      >
        <div className="template-transition">{renderTemplate()}</div>
      </div>
    </div>
  )
}

export default CVPreview
