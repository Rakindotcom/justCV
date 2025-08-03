import domtoimage from "dom-to-image-more"
import jsPDF from "jspdf"

export const generatePDF = async (cvData, template) => {
  try {
    const element = document.getElementById("cv-preview")
    if (!element) {
      throw new Error("CV preview element not found")
    }

    // Wait until all fonts are loaded
    await document.fonts.ready

    // Capture the element as PNG with scaling and fixed size
    const dataUrl = await domtoimage.toPng(element, {
      quality: 1,
      bgcolor: "#ffffff",
      style: {
        transform: "scale(2)",
        transformOrigin: "top left",
        width: element.scrollWidth + "px",
        height: element.scrollHeight + "px",
      },
      width: element.scrollWidth * 2,
      height: element.scrollHeight * 2,
    })

    // Create an image element from the data URL
    const img = new Image()
    img.src = dataUrl
    await new Promise((resolve) => {
      img.onload = resolve
    })

    // Initialize jsPDF
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: true,
    })

    // PDF page size in mm
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = pdf.internal.pageSize.getHeight()

    // Calculate image dimensions to fit the PDF width while keeping aspect ratio
    const ratio = img.width / img.height
    const imgWidth = pdfWidth
    const imgHeight = pdfWidth / ratio

    let position = 0
    let heightLeft = imgHeight

    // Add the first page
    pdf.addImage(img, "PNG", 0, position, imgWidth, imgHeight)
    heightLeft -= pdfHeight

    // Add more pages if the image is taller than one PDF page
    while (heightLeft > 0) {
      position -= pdfHeight
      pdf.addPage()
      pdf.addImage(img, "PNG", 0, position, imgWidth, imgHeight)
      heightLeft -= pdfHeight
    }

    // Generate filename safely
    const fileName = `${cvData.personalInfo?.name || "CV"}_Resume.pdf`.replace(/\s+/g, "_")
    pdf.save(fileName)

    return true
  } catch (error) {
    console.error("PDF generation error:", error)
    throw error
  }
}
