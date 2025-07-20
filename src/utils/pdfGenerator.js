import html2canvas from "html2canvas"
import jsPDF from "jspdf"

export const generatePDF = async (cvData, template) => {
  try {
    const element = document.getElementById("cv-preview")
    if (!element) {
      throw new Error("CV preview element not found")
    }

    // Configure html2canvas options for better quality
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#ffffff",
      width: element.scrollWidth,
      height: element.scrollHeight,
      logging: false,
      imageTimeout: 15000,
      removeContainer: true,
    })

    const imgData = canvas.toDataURL("image/png", 1.0)

    // Create PDF with high quality
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: true,
    })

    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = pdf.internal.pageSize.getHeight()

    const imgWidth = pdfWidth
    const imgHeight = (canvas.height * pdfWidth) / canvas.width

    let heightLeft = imgHeight
    let position = 0

    // Add first page
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight, undefined, "FAST")
    heightLeft -= pdfHeight

    // Add additional pages if needed
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight
      pdf.addPage()
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight, undefined, "FAST")
      heightLeft -= pdfHeight
    }

    // Generate filename
    const fileName = `${cvData.personalInfo?.name || "CV"}_Resume_Dark.pdf`.replace(/\s+/g, "_")

    // Download the PDF
    pdf.save(fileName)

    return true
  } catch (error) {
    console.error("PDF generation error:", error)
    throw error
  }
}
