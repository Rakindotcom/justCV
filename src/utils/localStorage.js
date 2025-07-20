const CV_DATA_KEY = "cvData"

export const saveCVData = (data) => {
  try {
    localStorage.setItem(CV_DATA_KEY, JSON.stringify(data))
    return true
  } catch (error) {
    console.error("Error saving CV data:", error)
    return false
  }
}

export const loadCVData = () => {
  try {
    const data = localStorage.getItem(CV_DATA_KEY)
    return data ? JSON.parse(data) : null
  } catch (error) {
    console.error("Error loading CV data:", error)
    return null
  }
}

export const clearCVData = () => {
  try {
    localStorage.removeItem(CV_DATA_KEY)
    return true
  } catch (error) {
    console.error("Error clearing CV data:", error)
    return false
  }
}
