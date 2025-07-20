import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import HomePage from "./pages/HomePage"
import CVBuilderPage from "./pages/CVBuilderPage"
import "react-toastify/dist/ReactToastify.css"
import "./App.css"

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/builder" element={<CVBuilderPage />} />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            toastClassName="bg-gray-800 text-white"
          />
        </div>
      </Router>
    </div>
  )
}

export default App
