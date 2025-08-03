import { useState, useEffect } from "react"

const SummaryForm = ({ data, onChange }) => {
  const [showPopup, setShowPopup] = useState(false)

  const handleGenerateAI = () => {
    setShowPopup(true)
  }

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [showPopup])

  return (
    <div className="space-y-6 relative">
      {/* Popup */}
      {showPopup && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-cyan-600 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-out pointer-events-none">
          🤖 AI Summary generation coming soon! For now, please write your summary manually.
        </div>
      )}

      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
          <span>📄</span>
          Professional Summary
        </label>
        <div className="relative">
          <textarea
            value={data || ""}
            onChange={(e) => onChange(e.target.value)}
            rows={8}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
            placeholder="Write a compelling summary of your professional background, key skills, and career objectives. This is your elevator pitch - make it count!"
          />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/0 to-blue-500/0 opacity-0 hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
        </div>
        <div className="text-xs text-gray-400 text-right">{data ? data.length : 0} characters</div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleGenerateAI}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-medium"
        >
          <span>🤖</span>
          Generate with AI
        </button>
        <div className="text-xs text-gray-500 flex items-center">Coming Soon</div>
      </div>

      <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
        <div className="flex items-start gap-3">
          <span className="text-cyan-400 text-lg">✨</span>
          <div>
            <h4 className="text-sm font-medium text-white mb-2">Writing Tips</h4>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Keep it concise (2-4 sentences)</li>
              <li>• Highlight your most relevant skills and experience</li>
              <li>• Mention your career goals and what you bring to the table</li>
              <li>• Use action words and quantify achievements when possible</li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-out {
          0% { opacity: 0; transform: translateY(-10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
        .animate-fade-in-out {
          animation: fade-in-out 3s ease forwards;
        }
      `}</style>
    </div>
  )
}

export default SummaryForm